/*
  Learn to beatmatch: two decks that play drum patterns made live in the browser (Web Audio,
  no music files), a mixer, and a step-by-step guide. Everything runs on the visitor's device.
*/
(() => {
  const $ = id => document.getElementById(id);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PT = () => window.I18N && I18N.lang === 'pt';
  const L = (en, pt) => (PT() ? pt : en);

  /* ---------- sound ---------- */
  let ac = null, master = null, noise = null;
  const audio = () => {
    if (ac) { if (ac.state === 'suspended') ac.resume(); return ac; }
    ac = new (window.AudioContext || window.webkitAudioContext)();
    const comp = ac.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4;
    master = ac.createGain(); master.gain.value = .8; master.connect(comp); comp.connect(ac.destination);
    noise = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
    const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    decks.forEach(dk => {
      dk.bus = ac.createGain(); dk.out = ac.createGain(); dk.eq = {};
      let prev = dk.bus;
      BANDS.forEach(([band, type, freq]) => {
        const f = ac.createBiquadFilter(); f.type = type; f.frequency.value = freq; if (type === 'peaking') f.Q.value = .7;
        f.gain.value = dB(dk.eqv[band]); prev.connect(f); prev = f; dk.eq[band] = f;
      });
      prev.connect(dk.out); dk.out.connect(master);
    });
    mixLevels();
    return ac;
  };
  const env = (g, t, peak, dur, attack = .002) => {
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + attack); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  };
  const kick = (dk, t, f0, f1, vol) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + .13);
    env(g, t, vol, .42); o.connect(g); g.connect(dk.bus); o.start(t); o.stop(t + .45);
  };
  const hiss = (dk, t, type, freq, q, vol, dur) => {
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noise; f.type = type; f.frequency.value = freq; f.Q.value = q;
    env(g, t, vol, dur); s.connect(f); f.connect(g); g.connect(dk.bus); s.start(t, Math.random() * .5); s.stop(t + dur + .02);
  };
  const tone = (dk, t, freq, type, vol, dur, cutoff) => {
    const o = ac.createOscillator(), f = ac.createBiquadFilter(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t); f.type = 'lowpass'; f.frequency.setValueAtTime(cutoff, t); f.frequency.exponentialRampToValueAtTime(Math.max(80, cutoff / 4), t + dur);
    env(g, t, vol, dur, .004); o.connect(f); f.connect(g); g.connect(dk.bus); o.start(t); o.stop(t + dur + .02);
  };
  const clap = (dk, t, vol) => { [0, .011, .022].forEach(d => hiss(dk, t + d, 'bandpass', 1400, 1.2, vol * (d ? .6 : 1), .09)); hiss(dk, t + .03, 'bandpass', 1200, .8, vol * .5, .22); };

  /* two different grooves, so you can hear each deck */
  const PATTERNS = {
    A(dk, step, t) {                    // deep house: kick, open hat on the off-beat, soft 16ths, rolling bass
      const s = step % 16, bar = Math.floor(step / 16) % 4;
      if (s % 4 === 0) kick(dk, t, 140, 44, .95);
      if (s % 4 === 2) hiss(dk, t, 'highpass', 7500, .7, .22, .16);
      if (s % 2 === 1) hiss(dk, t, 'highpass', 9500, .7, .06, .04);
      const bass = [55, 55, 65.41, 49][bar];
      if (s % 4 === 2) tone(dk, t, bass, 'sawtooth', .28, .2, 520);
      if (s === 14) tone(dk, t, bass * 2, 'sawtooth', .14, .12, 900);
    },
    B(dk, step, t) {                    // afro house: punchier kick, claps on 2 and 4, shaker, congas, bass stabs
      const s = step % 16, bar = Math.floor(step / 16) % 2;
      if (s % 4 === 0) kick(dk, t, 170, 56, .9);
      if (s === 4 || s === 12) clap(dk, t, .32);
      hiss(dk, t, 'bandpass', 6200, 2, s % 2 ? .05 : .09, .05);
      if ([3, 6, 10, 11, 14].includes(s)) tone(dk, t, s === 11 ? 330 : 220, 'sine', .22, .14, 2400);
      if ([0, 7, 10].includes(s)) tone(dk, t, bar ? 61.74 : 73.42, 'square', .13, .18, 380);
    },
  };

  /* ---------- decks ---------- */
  const mkDeck = (id, base) => ({ id, base, pitch: 0, bend: 1, playing: false, anchorT: 0, anchorB: 0, step: 0, out: null, vol: .85,
                                  cue: 0, cueHeld: false, cueKeep: false, synced: false, eqv: { low: 0, mid: 0, hi: 0 } });
  // three-band EQ, like the channel knobs on a club mixer. Turned fully left, a band is cut out ("kill").
  const BANDS = [['low', 'lowshelf', 220], ['mid', 'peaking', 1000], ['hi', 'highshelf', 3200]];
  const dB = v => v < 0 ? v * 40 : v * 6;
  const decks = [mkDeck('A', 124), mkDeck('B', 118)];
  const [A, B] = decks;
  const bpm = dk => dk.base * (1 + dk.pitch / 100);
  const rate = dk => bpm(dk) * dk.bend;
  const now = () => (ac ? ac.currentTime : performance.now() / 1000);
  const beatAt = (dk, t = now()) => dk.playing ? dk.anchorB + (t - dk.anchorT) * rate(dk) / 60 : dk.anchorB;
  const reanchor = dk => { dk.anchorB = beatAt(dk); dk.anchorT = now(); };
  const setBend = (dk, b) => { reanchor(dk); dk.bend = b; };
  const setPitch = (dk, p) => { reanchor(dk); dk.pitch = p; };

  const other = dk => (dk === A ? B : A);
  const markPlay = dk => {
    $('play' + dk.id).classList.toggle('on', dk.playing && !(dk.cueHeld && !dk.cueKeep));
    $('play' + dk.id).textContent = dk.playing && !(dk.cueHeld && !dk.cueKeep) ? L('Pause', 'Pausa') : L('Play', 'Tocar');
  };
  const start = (dk, onBeat) => {
    dk.anchorT = now() + .03;
    const o = other(dk);
    if (onBeat && dk.synced && o.playing) {           // with Sync on, the deck starts exactly on the other deck's beat
      const f = beatAt(o, dk.anchorT) % 1; dk.anchorB = Math.max(0, Math.round(dk.anchorB - f) + f);
    }
    dk.playing = true; dk.step = Math.ceil(dk.anchorB * 4 - 1e-6);
  };
  const stop = dk => { dk.anchorB = beatAt(dk); dk.playing = false; };
  const play = dk => {
    audio();
    if (dk.cueHeld) { dk.cueKeep = true; markPlay(dk); return; }   // Play while holding Cue: keep it playing after you let go
    if (dk.playing) stop(dk); else start(dk, true);
    markPlay(dk);
  };

  // Cue, like on a CDJ: stopped, hold it to hear the track from the cue point and let go to jump back.
  // Stopped somewhere else (after moving the platter), pressing it makes that spot the new cue point.
  // Playing, it jumps back to the cue point and stops.
  const cueDown = dk => {
    audio();
    if (dk.playing && !dk.cueHeld) { stop(dk); dk.anchorB = dk.cue; markPlay(dk); return; }
    if (dk.cueHeld) return;
    if (Math.abs(dk.anchorB - dk.cue) > 1e-3) dk.cue = dk.anchorB;
    dk.anchorB = dk.cue; dk.cueHeld = true; dk.cueKeep = false; start(dk, false); markPlay(dk);
  };
  const cueUp = dk => {
    if (!dk.cueHeld) return;
    dk.cueHeld = false;
    if (!dk.cueKeep) { stop(dk); dk.anchorB = dk.cue; }
    dk.cueKeep = false; markPlay(dk);
  };

  // Sync: match the other deck's tempo (and keep following it), and line up the beat
  const matchTempo = dk => {
    const p = Math.max(-8, Math.min(8, (bpm(other(dk)) / dk.base - 1) * 100));
    if (Math.abs(p - dk.pitch) > 1e-6) { setPitch(dk, p); $('pitch' + dk.id).value = p; }
  };
  const sync = dk => {
    audio();
    const o = other(dk);
    if (dk.synced) { dk.synced = false; return; }
    dk.synced = true; if (o.synced) o.synced = false;          // one deck leads, the other follows
    matchTempo(dk);
    if (dk.playing && o.playing) {
      reanchor(dk);
      let d = (beatAt(dk) % 1) - (beatAt(o) % 1); if (d > .5) d -= 1; if (d < -.5) d += 1;
      dk.anchorB -= d;
    }
    const b = $('sync' + dk.id); b.classList.add('flash'); setTimeout(() => b.classList.remove('flash'), 180);
  };

  // the EQ knobs: drag up or down (or use the arrow keys), double-click to reset
  const setEQ = (dk, band, v) => {
    v = Math.max(-1, Math.min(1, Math.abs(v) < .04 ? 0 : v));
    dk.eqv[band] = v;
    if (ac) dk.eq[band].gain.setTargetAtTime(dB(v), ac.currentTime, .015);
    const k = $('eq' + dk.id + band), kill = v <= -.98;
    k.style.setProperty('--r', `${v * 135}deg`);
    k.classList.toggle('kill', kill); k.classList.toggle('cut', v < 0 && !kill);
    k.setAttribute('aria-valuenow', v.toFixed(2));
    k.setAttribute('aria-valuetext', kill ? 'Kill' : `${dB(v) > 0 ? '+' : ''}${Math.round(dB(v))} dB`);
  };
  document.querySelectorAll('.knob').forEach(k => {
    const dk = k.dataset.deck === 'A' ? A : B, band = k.dataset.band;
    let y0 = 0, v0 = 0, on = false;
    k.addEventListener('pointerdown', e => { audio(); on = true; y0 = e.clientY; v0 = dk.eqv[band]; try { k.setPointerCapture(e.pointerId); } catch (_) {} });
    k.addEventListener('pointermove', e => { if (on) setEQ(dk, band, v0 + (y0 - e.clientY) / 110); });
    const up = () => on = false; k.addEventListener('pointerup', up); k.addEventListener('pointercancel', up);
    k.addEventListener('dblclick', () => setEQ(dk, band, 0));
    k.addEventListener('keydown', e => {
      const step = { ArrowUp: .1, ArrowRight: .1, ArrowDown: -.1, ArrowLeft: -.1 }[e.key];
      if (step) { e.preventDefault(); audio(); setEQ(dk, band, dk.eqv[band] + step); }
      if (e.key === 'Home') { e.preventDefault(); setEQ(dk, band, -1); }
      if (e.key === '0' || e.key === 'Delete') setEQ(dk, band, 0);
    });
  });

  // look ahead and schedule the next sounds on each playing deck
  setInterval(() => {
    if (!ac) return;
    const horizon = ac.currentTime + .12;
    decks.forEach(dk => {
      if (!dk.playing) return;
      for (;;) {
        const t = dk.anchorT + (dk.step / 4 - dk.anchorB) * 60 / rate(dk);
        if (t > horizon) break;
        if (t >= ac.currentTime - .01) PATTERNS[dk.id](dk, dk.step, Math.max(t, ac.currentTime));
        dk.step++;
      }
    });
  }, 25);

  /* ---------- mixer controls ---------- */
  const mixLevels = () => {
    if (!ac) return;
    const x = +$('xfade').value;
    const gA = A.vol * Math.cos(x * Math.PI / 2) * 1.2, gB = B.vol * Math.sin(x * Math.PI / 2) * 1.2;
    A.out.gain.setTargetAtTime(gA, ac.currentTime, .02); B.out.gain.setTargetAtTime(gB, ac.currentTime, .02);
  };
  $('xfade').addEventListener('input', mixLevels);
  $('volA').addEventListener('input', e => { A.vol = +e.target.value; mixLevels(); });
  $('volB').addEventListener('input', e => { B.vol = +e.target.value; mixLevels(); });
  [A, B].forEach(dk => {
    $('play' + dk.id).addEventListener('click', () => play(dk));
    $('pitch' + dk.id).addEventListener('input', e => { dk.synced = false; setPitch(dk, +e.target.value); });   // touching the fader takes over from Sync
    $('sync' + dk.id).addEventListener('click', () => sync(dk));
    const cb = $('cue' + dk.id);
    cb.addEventListener('pointerdown', e => { e.preventDefault(); try { cb.setPointerCapture(e.pointerId); } catch (_) {} cueDown(dk); });
    ['pointerup', 'pointercancel'].forEach(ev => cb.addEventListener(ev, () => cueUp(dk)));
    cb.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && !e.repeat) { e.preventDefault(); cueDown(dk); } });
    cb.addEventListener('keyup', e => { if (e.key === 'Enter' || e.key === ' ') cueUp(dk); });
  });
  // nudge buttons: a short push or drag, like a finger on the side of the platter
  document.querySelectorAll('.nudge').forEach(b => {
    const dk = b.dataset.deck === 'A' ? A : B, dir = +b.dataset.nudge;
    const start = e => { e.preventDefault(); audio(); if (dk.playing) setBend(dk, 1 + dir * .06); else { dk.anchorB += dir * .03; } };
    const stop = () => { if (dk.bend !== 1) setBend(dk, 1); };
    b.addEventListener('pointerdown', start); ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, stop));
    b.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { start(e); setTimeout(stop, 220); } });
  });

  // the jog wheels: drag around to speed up or slow down; when stopped, drag to move through the track
  const DEG_PER_BEAT = 97;
  [A, B].forEach(dk => {
    const el = $('plat' + dk.id);
    let dragging = false, lastA = 0, lastT = 0;
    const ang = e => { const r = el.getBoundingClientRect(); return Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180 / Math.PI; };
    el.addEventListener('pointerdown', e => { audio(); dragging = true; el.setPointerCapture(e.pointerId); lastA = ang(e); lastT = performance.now(); });
    el.addEventListener('pointermove', e => {
      if (!dragging) return;
      const a = ang(e), tNow = performance.now();
      let d = a - lastA; if (d > 180) d -= 360; if (d < -180) d += 360;
      const dt = Math.max(8, tNow - lastT) / 1000; lastA = a; lastT = tNow;
      if (dk.playing) setBend(dk, 1 + Math.max(-.14, Math.min(.14, (d / dt) / 1800)));
      else dk.anchorB = Math.max(0, dk.anchorB + d / DEG_PER_BEAT);
    });
    const up = () => { if (!dragging) return; dragging = false; if (dk.bend !== 1) setBend(dk, 1); };
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    el.tabIndex = 0;
    el.addEventListener('keydown', e => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault(); const dir = e.key === 'ArrowRight' ? 1 : -1;
      if (dk.playing) { setBend(dk, 1 + dir * .06); setTimeout(() => setBend(dk, 1), 160); } else dk.anchorB = Math.max(0, dk.anchorB + dir * .05);
    });
  });

  /* ---------- reading the two decks ---------- */
  const offset = () => {          // how far deck B's beat is from deck A's, in beats (-0.5 to 0.5)
    let d = (beatAt(B) % 1) - (beatAt(A) % 1);
    if (d > .5) d -= 1; if (d < -.5) d += 1; return d;
  };
  const ms = () => offset() * 60000 / bpm(A);

  /* ---------- the guide ---------- */
  const STEPS = [
    { t: ['Ready to mix?', 'Pronto para misturar?'],
      p: ['Two decks, one goal: get both tracks playing at the same speed with their kick drums landing together. Then blend from one into the other. It takes about two minutes.',
          'Dois pratos, um objetivo: pôr as duas faixas à mesma velocidade, com os bombos a bater juntos. Depois passar de uma para a outra. Demora uns dois minutos.'],
      next: ['Let’s go', 'Vamos'] },
    { t: ['Press play on Deck A', 'Carregue em Tocar no Prato A'], target: 'playA',
      p: ['Deck A is the track already playing to the crowd. Start it and listen to the steady kick drum.',
          'O Prato A é a faixa que já está a tocar para o público. Ponha-a a tocar e ouça o bombo constante.'],
      done: () => A.playing },
    { t: ['Count the beat', 'Conte o ritmo'], target: 'lightsA',
      p: ['House music counts in fours. Count along: <b>1, 2, 3, 4</b>. The white light is the “1”, the start of every bar.',
          'A música house conta-se em quatro tempos. Conte comigo: <b>1, 2, 3, 4</b>. A luz branca é o “1”, o início de cada compasso.'],
      wait: 8, next: ['I can hear it', 'Já estou a ouvir'] },
    { t: ['Start Deck B on the “1”', 'Comece o Prato B no “1”'], target: 'playB',
      p: ['This is the next track you want to bring in. Watch Deck A’s lights and press play on Deck B when the white one flashes.',
          'Esta é a próxima faixa que quer trazer. Veja as luzes do Prato A e carregue em Tocar no Prato B quando a branca acender.'],
      done: () => B.playing && !B.cueHeld },
    { t: ['Hear the gallop?', 'Ouve o galope?'], target: 'phase',
      p: ['Deck B is slower (118 BPM against 124), so its kicks keep sliding away from Deck A’s: “ba-dum, ba-dum”. The moving marker in the middle shows that drift.',
          'O Prato B é mais lento (118 BPM contra 124), por isso os bombos vão escorregando em relação aos do Prato A: “ta-tum, ta-tum”. O marcador ao meio mostra essa deriva.'],
      wait: 6, next: ['Got it', 'Percebi'] },
    { t: ['Match the tempo', 'Acerte o andamento'], target: 'pitchB',
      p: ['Move <b>Deck B’s tempo fader</b> until both decks show the same BPM. Up makes it faster. (The Sync button can do this for you, but try it by ear first.)',
          'Mova o <b>fader de andamento do Prato B</b> até os dois pratos mostrarem os mesmos BPM. Para cima fica mais rápido. (O botão Sync faz isto por si, mas tente primeiro de ouvido.)'],
      done: () => Math.abs(bpm(B) - bpm(A)) < .15, hold: .8,
      tip: () => {
        const d = bpm(B) - bpm(A);
        if (Math.abs(d) < .15) return [L('Speeds matched!', 'Velocidades iguais!'), true];
        return [d < 0 ? L(`Deck B is ${Math.abs(d).toFixed(1)} BPM slower: push the fader up`, `O Prato B está ${Math.abs(d).toFixed(1)} BPM mais lento: suba o fader`)
                       : L(`Deck B is ${d.toFixed(1)} BPM faster: bring the fader down a little`, `O Prato B está ${d.toFixed(1)} BPM mais rápido: baixe um pouco o fader`), false];
      } },
    { t: ['Line up the kicks', 'Alinhe os bombos'], target: 'platB',
      p: ['Same speed, but the kicks still don’t land together. Give <b>Deck B’s jog wheel</b> a small push forward or drag back (or use ‹ ›) until the marker sits on the green line.',
          'Mesma velocidade, mas os bombos ainda não batem juntos. Dê um pequeno empurrão para a frente ou para trás no <b>prato do Prato B</b> (ou use ‹ ›) até o marcador ficar na linha verde.'],
      done: () => Math.abs(ms()) < 18 && Math.abs(bpm(B) - bpm(A)) < .3, hold: 1.2,
      tip: () => {
        if (Math.abs(bpm(B) - bpm(A)) >= .3) return [L('The speeds drifted apart: match the BPM again first', 'As velocidades afastaram-se: acerte primeiro os BPM'), false];
        const m = ms();
        if (Math.abs(m) < 18) return [L('Locked in. Hear how the two kicks became one?', 'Encaixado. Ouve como os dois bombos se tornaram um?'), true];
        return [m < 0 ? L(`Deck B is ${Math.round(-m)} ms behind: push it forward`, `O Prato B está ${Math.round(-m)} ms atrasado: empurre-o para a frente`)
                      : L(`Deck B is ${Math.round(m)} ms ahead: hold it back a little`, `O Prato B está ${Math.round(m)} ms adiantado: trave-o um pouco`), false];
      } },
    { t: ['Blend it in', 'Faça a transição'], target: 'xfadeBox',
      p: ['Now the fun part. Slowly slide the <b>crossfader</b> from A to B. The crowd should never feel the change.',
          'Agora a parte divertida. Deslize devagar o <b>crossfader</b> do A para o B. O público nem deve sentir a mudança.'],
      done: () => +$('xfade').value > .92 && Math.abs(ms()) < 40, hold: .4,
      tip: () => Math.abs(ms()) >= 40 ? [L('The beats slipped: nudge Deck B back in line first', 'Os ritmos escorregaram: alinhe primeiro o Prato B'), false] : ['', false] },
    { t: ['You just mixed!', 'Acabou de misturar!'],
      p: ['That’s beatmatching: the base of every DJ set. Play around freely now: try bringing Deck A back in, or change the tempo of both decks together.',
          'Isto é beatmatching: a base de qualquer set. Agora brinque à vontade: tente trazer de volta o Prato A, ou mudar o andamento dos dois pratos ao mesmo tempo.'],
      last: true },
  ];
  let si = 0, stepStart = 0, okSince = 0, celebrated = false;
  const beatsA = () => beatAt(A);
  const renderStep = () => {
    const s = STEPS[si];
    $('gNo').textContent = s.last ? L('Done', 'Feito') : `${L('Step', 'Passo')} ${si} / ${STEPS.length - 2}`;
    if (si === 0) $('gNo').textContent = L('Beatmatching in 6 steps', 'Beatmatching em 6 passos');
    $('gTitle').textContent = s.t[PT() ? 1 : 0];
    $('gText').innerHTML = s.p[PT() ? 1 : 0];
    const nx = $('gNext');
    nx.hidden = !!s.last || (!!s.done && !s.next);
    nx.textContent = s.next ? s.next[PT() ? 1 : 0] : L('Next', 'Seguinte');
    $('gTip').textContent = ''; $('gTip').classList.remove('good');
    $('gDots').innerHTML = STEPS.slice(1, -1).map((_, i) => `<i class="${i + 1 < si ? 'done' : i + 1 === si ? 'now' : ''}"></i>`).join('');
    document.querySelectorAll('.hint-glow').forEach(n => n.classList.remove('hint-glow'));
    document.querySelectorAll('.deck.hint').forEach(n => n.classList.remove('hint'));
    if (s.target) { const el = $(s.target); if (el) { el.classList.add('hint-glow'); const deck = el.closest('.deck'); if (deck) deck.classList.add('hint'); } }
  };
  const go = i => { si = Math.max(0, Math.min(STEPS.length - 1, i)); stepStart = beatsA(); okSince = 0; renderStep(); if (STEPS[si].last && !celebrated) { celebrated = true; party(); } };
  $('gNext').addEventListener('click', () => { audio(); go(si + 1); });
  $('gRestart').addEventListener('click', () => {
    decks.forEach(dk => { dk.cueHeld = dk.cueKeep = dk.synced = false; if (dk.playing) stop(dk); markPlay(dk); dk.anchorB = 0; dk.cue = 0; dk.pitch = 0; dk.bend = 1; $('pitch' + dk.id).value = 0; BANDS.forEach(([b]) => setEQ(dk, b, 0)); });
    $('xfade').value = .5; mixLevels(); celebrated = false; go(0);
  });
  document.addEventListener('langchange', () => { renderStep(); decks.forEach(markPlay); });

  /* ---------- every frame: lights, platters, readouts, guide checks ---------- */
  let lastTip = 0;
  const frame = () => {
    const t = now();
    decks.forEach(dk => {
      const b = beatAt(dk, t);
      $('bpm' + dk.id).firstChild.nodeValue = bpm(dk).toFixed(1);
      $('pct' + dk.id).textContent = `${dk.pitch > 0 ? '+' : ''}${dk.pitch.toFixed(1)}%`;
      const lit = dk.playing && (b % 1) < .28, beat = Math.floor(b) % 4;
      [...$('lights' + dk.id).children].forEach((n, i) => n.classList.toggle('on', lit && i === beat));
      $('disc' + dk.id).style.transform = `rotate(${(b * DEG_PER_BEAT) % 360}deg)`;
      if (dk.synced) matchTempo(dk);
      const cue = $('cue' + dk.id), atCue = !dk.playing && Math.abs(dk.anchorB - dk.cue) < 1e-3;
      cue.classList.toggle('held', dk.cueHeld); cue.classList.toggle('at', atCue); cue.classList.toggle('blink', !dk.playing && !atCue);
      $('sync' + dk.id).classList.toggle('on', dk.synced); $('sync' + dk.id).setAttribute('aria-pressed', dk.synced);
    });
    // phase meter and readouts
    const both = A.playing && B.playing, d = offset(), m = ms(), diff = bpm(B) - bpm(A);
    $('phaseMarker').style.left = both ? `${50 + d * 100}%` : '50%';
    $('phaseMarker').classList.toggle('locked', both && Math.abs(m) < 18 && Math.abs(diff) < .3);
    $('phaseRead').innerHTML = both ? (Math.abs(m) < 18 && Math.abs(diff) < .3 ? `<b>${L('Locked', 'Encaixado')}</b>` : `${L('Deck B', 'Prato B')} <b>${Math.abs(Math.round(m))} ms</b> ${m < 0 ? L('behind', 'atrasado') : L('ahead', 'adiantado')}`) : L('Start both decks to compare', 'Ponha os dois pratos a tocar para comparar');
    $('bpmDiff').textContent = `${diff > 0 ? '+' : ''}${diff.toFixed(1)} BPM`;
    $('bpmDiff').classList.toggle('ok', Math.abs(diff) < .15);

    // the guide
    const s = STEPS[si];
    if (s.done) {
      if (s.done()) { if (!okSince) okSince = performance.now(); if (performance.now() - okSince > (s.hold || 0) * 1000) go(si + 1); }
      else okSince = 0;
    }
    if (s.wait && A.playing && beatsA() - stepStart >= s.wait && !s.waited) { s.waited = true; $('gNext').classList.add('primary'); }
    if (s.tip && performance.now() - lastTip > 150) {
      lastTip = performance.now();
      const [txt, good] = s.tip(); $('gTip').textContent = txt; $('gTip').classList.toggle('good', good);
    }
    requestAnimationFrame(frame);
  };

  /* ---------- a little celebration ---------- */
  const party = () => {
    if (still) return;
    const cv = $('party'), c = cv.getContext('2d'); cv.width = innerWidth; cv.height = innerHeight;
    const cols = ['#df8fb0', '#7fcbd8', '#d9b46c', '#8fd19e', '#e9e2d4'];
    const bits = Array.from({ length: 140 }, () => ({ x: innerWidth / 2, y: innerHeight * .35, vx: (Math.random() - .5) * 14, vy: -Math.random() * 12 - 4, r: Math.random() * 6.28, s: 4 + Math.random() * 5, c: cols[Math.random() * cols.length | 0] }));
    let n = 0;
    const tick = () => {
      c.clearRect(0, 0, cv.width, cv.height);
      bits.forEach(b => { b.vy += .32; b.x += b.vx; b.y += b.vy; b.r += .1; c.save(); c.translate(b.x, b.y); c.rotate(b.r); c.fillStyle = b.c; c.fillRect(-b.s / 2, -b.s / 4, b.s, b.s / 2); c.restore(); });
      if (++n < 170) requestAnimationFrame(tick); else c.clearRect(0, 0, cv.width, cv.height);
    };
    tick();
  };

  go(0);
  requestAnimationFrame(frame);
  window.MIXER = { A, B, offsetMs: () => ms() };   // handy for poking at it from the console
  const nav = document.getElementById('nav');
  addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });
  document.getElementById('year').textContent = new Date().getFullYear();
})();
