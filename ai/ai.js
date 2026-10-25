/*
  The AI page: live news (GDELT and Hacker News, both free and keyless), three small games,
  and before/after cards. Everything runs in the visitor's browser.
*/
(() => {
  const $ = id => document.getElementById(id);
  const PT = () => window.I18N && I18N.lang === 'pt';
  const L = (en, pt) => (PT() ? pt : en);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const store = { get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} } };

  /* =============== 1. News =============== */
  const list = $('newsList'), stamp = $('newsStamp');
  let tab = 'world', lastGdelt = 0, loading = false;
  const ago = ms => {
    const m = Math.max(1, Math.round(ms / 60000));
    if (m < 60) return L(`${m} min ago`, `há ${m} min`);
    const h = Math.round(m / 60); if (h < 48) return L(`${h} h ago`, `há ${h} h`);
    return L(`${Math.round(h / 24)} days ago`, `há ${Math.round(h / 24)} dias`);
  };
  const gdeltDate = s => Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8), +s.slice(9, 11), +s.slice(11, 13), +s.slice(13, 15));
  // titles from GDELT come with spaces before punctuation ("Valuation . What"); tidy them
  const tidy = s => String(s).replace(/\s+([.,:;!?%)])/g, '$1').replace(/([($])\s+/g, '$1').replace(/(\d) \. (\d)/g, '$1.$2').replace(/\s{2,}/g, ' ').trim();
  const norm = s => s.toLowerCase().replace(/[^a-z0-9à-ú]+/g, ' ').trim().split(' ').slice(0, 7).join(' ');

  // give up on a slow source after a while, so the page never hangs
  const timed = (url, ms = 12000) => { const c = new AbortController(); const id = setTimeout(() => c.abort(), ms); return fetch(url, { signal: c.signal }).finally(() => clearTimeout(id)); };
  const fetchWorld = async () => {
    const lang = PT() ? 'portuguese' : 'english';
    const key = 'ai-news-' + lang, cached = store.get(key);
    if (cached && Date.now() - cached.at < 15 * 60000) return cached.items;
    const wait = 5600 - (Date.now() - lastGdelt);            // the news service allows one request every 5 seconds
    if (wait > 0) await new Promise(r => setTimeout(r, wait));
    lastGdelt = Date.now();
    const q = `("artificial intelligence" OR "generative AI" OR OpenAI OR Anthropic OR DeepMind OR ChatGPT) sourcelang:${lang}`;
    const url = `https://api.gdeltproject.org/api/v2/doc/doc?query=${encodeURIComponent(q)}&mode=artlist&format=json&maxrecords=60&timespan=3d&sort=hybridrel`;
    const r = await timed(url, 7000); if (!r.ok) throw new Error(r.status);
    const d = JSON.parse(await r.text() || '{}');
    const seen = new Set(), items = [];
    for (const a of d.articles || []) {
      const title = tidy(a.title), k = norm(title);
      if (!title || seen.has(k) || title.length < 25) continue;
      seen.add(k);
      items.push({ title, url: a.url, src: a.domain, img: a.socialimage || '', at: gdeltDate(a.seendate), country: a.sourcecountry });
      if (items.length >= 18) break;
    }
    if (items.length) store.set(key, { at: Date.now(), items });
    return items.length ? items : (cached ? cached.items : []);
  };
  const fetchTech = async () => {
    const cached = store.get('ai-news-tech');
    if (cached && Date.now() - cached.at < 15 * 60000) return cached.items;
    const since = Math.floor(Date.now() / 1000) - 4 * 86400;
    const url = `https://hn.algolia.com/api/v1/search?query=AI&tags=story&numericFilters=created_at_i>${since},points>40&hitsPerPage=40`;
    const r = await timed(url); if (!r.ok) throw new Error(r.status);
    const d = await r.json();
    const items = d.hits.filter(h => h.url && h.title)
      .sort((a, b) => b.points - a.points).slice(0, 18)
      .map(h => ({ title: h.title, url: h.url, src: new URL(h.url).hostname.replace(/^www\./, ''), at: h.created_at_i * 1000, points: h.points, comments: h.num_comments, hn: `https://news.ycombinator.com/item?id=${h.objectID}` }));
    if (items.length) store.set('ai-news-tech', { at: Date.now(), items });
    return items.length ? items : (cached ? cached.items : []);
  };

  const card = (it, i) => `
    <li class="story${i === 0 && it.img ? ' lead' : ''}">
      <a href="${esc(it.url)}" target="_blank" rel="noopener">
        ${it.img ? `<span class="pic"><img src="${esc(it.img)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"></span>` : ''}
        <span class="meta"><b>${esc(it.src)}</b>${it.country ? ` · ${esc(it.country)}` : ''} · ${ago(Date.now() - it.at)}</span>
        <span class="headline">${esc(it.title)}</span>
        ${it.points != null ? `<span class="meta">▲ ${it.points} · ${it.comments} ${L('comments', 'comentários')}</span>` : ''}
        <span class="go">${L('Read the story', 'Ler a notícia')} <span aria-hidden="true">↗</span></span>
      </a>
    </li>`;

  const loadNews = async () => {
    if (loading) return; loading = true;
    list.setAttribute('aria-busy', 'true');
    list.innerHTML = Array.from({ length: 6 }, () => '<li class="story skeleton"><span></span><span></span><span></span></li>').join('');
    const techStamp = L('The AI stories tech people are reading most this week, via Hacker News', 'As notícias de IA mais lidas pela comunidade tech esta semana, via Hacker News');
    try {
      let items, note = '';
      if (tab === 'world') {
        const backup = fetchTech().catch(() => []);       // fetched alongside, in case the worldwide source is slow
        try { items = await fetchWorld(); } catch (e) { items = []; }
        if (!items.length) {                 // the worldwide source is busy: show the tech community's picks instead
          items = await backup;
          note = L('Worldwide news is busy right now, so here’s what the tech community is reading. ', 'As notícias mundiais estão ocupadas de momento, por isso aqui fica o que a comunidade tech está a ler. ');
        }
      } else items = await fetchTech();
      list.innerHTML = items.length ? items.map(card).join('') : `<li class="news-empty">${L('No fresh stories right now. Try again in a few minutes.', 'Sem notícias novas de momento. Tente dentro de alguns minutos.')}</li>`;
      stamp.textContent = note ? note : tab === 'world'
        ? L('Worldwide headlines from the last 3 days, via GDELT', 'Notícias de todo o mundo dos últimos 3 dias, via GDELT')
        : techStamp;
    } catch (e) {
      list.innerHTML = `<li class="news-empty">${L('The news feed is taking a break. Please try again in a minute.', 'As notícias estão em pausa. Tente novamente dentro de um minuto.')}</li>`;
    }
    list.removeAttribute('aria-busy');
    loading = false;
    expanded = false; fold();
  };

  /* show two rows of stories; the rest drop down when asked */
  const more = $('newsMore');
  let expanded = false;
  const fold = () => {
    const items = [...list.querySelectorAll('.story:not(.skeleton)')];
    items.forEach(li => li.hidden = false);
    if (!items.length) { more.hidden = true; return; }
    const tops = [...new Set(items.map(li => li.offsetTop))].sort((a, b) => a - b);
    // the lead story spans two rows, so count rows by where cards start
    const rowStarts = tops.filter((v, i) => i === 0 || v - tops[i - 1] > 20);
    const cut = rowStarts[2] ?? Infinity;
    const extra = items.filter(li => li.offsetTop >= cut - 1);
    if (!expanded) extra.forEach(li => li.hidden = true);
    more.hidden = !extra.length;
    more.querySelector('span').textContent = expanded ? L('Show fewer', 'Mostrar menos') : L(`Show ${extra.length} more stories`, `Mostrar mais ${extra.length} notícias`);
    more.setAttribute('aria-expanded', expanded);
  };
  more.addEventListener('click', () => {
    expanded = !expanded;
    if (expanded) { fold(); list.querySelectorAll('.story[hidden]').forEach(li => li.hidden = false); list.querySelectorAll('.story').forEach((li, i) => { li.style.animationDelay = `${(i % 6) * 40}ms`; }); list.classList.add('opening'); setTimeout(() => list.classList.remove('opening'), 700); }
    else { fold(); list.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    more.querySelector('span').textContent = expanded ? L('Show fewer', 'Mostrar menos') : more.querySelector('span').textContent;
    more.setAttribute('aria-expanded', expanded);
  });
  let foldT; addEventListener('resize', () => { clearTimeout(foldT); foldT = setTimeout(() => { if (!expanded) fold(); }, 150); });
  document.querySelectorAll('.news-tabs button').forEach(b => b.addEventListener('click', () => {
    if (b.dataset.tab === tab) return;
    tab = b.dataset.tab;
    document.querySelectorAll('.news-tabs button').forEach(x => x.setAttribute('aria-selected', x === b));
    loadNews();
  }));
  $('newsRefresh').addEventListener('click', () => { store.set(tab === 'world' ? 'ai-news-' + (PT() ? 'portuguese' : 'english') : 'ai-news-tech', null); loadNews(); });
  // news is the first thing on the page, so start fetching straight away
  loadNews();
  document.addEventListener('langchange', () => { if (list.children.length) loadNews(); });

  /* =============== 2a. Out-think the machine (rock, paper, scissors) =============== */
  const MOVES = ['rock', 'paper', 'scissors'];
  const ICON = { rock: '✊', paper: '✋', scissors: '✌️' };
  const NAME = m => ({ rock: L('Rock', 'Pedra'), paper: L('Paper', 'Papel'), scissors: L('Scissors', 'Tesoura') }[m]);
  const BEATS = { rock: 'paper', paper: 'scissors', scissors: 'rock' };   // what beats each move
  const hist = [], counts = {}, score = { you: 0, ai: 0, draw: 0 };
  let reads = 0, rounds = 0;
  const bump = (k, m) => { counts[k] = counts[k] || { rock: 0, paper: 0, scissors: 0 }; counts[k][m]++; };
  const predict = () => {
    // look at what you played after your last two moves, then your last move, then overall
    const keys = [hist.slice(-2).join('>'), hist.slice(-1).join('>'), '*'];
    for (const k of keys) {
      const c = counts['n' + k]; if (!c) continue;
      const tot = c.rock + c.paper + c.scissors; if (tot < 2 && k !== '*') continue;
      const best = MOVES.reduce((a, b) => (c[b] > c[a] ? b : a));
      return { move: best, conf: c[best] / tot };
    }
    return { move: MOVES[Math.random() * 3 | 0], conf: 1 / 3 };
  };
  const playRPS = you => {
    const guess = predict();
    const ai = guess.conf > .34 ? BEATS[guess.move] : MOVES[Math.random() * 3 | 0];
    // learn from this round
    [hist.slice(-2).join('>'), hist.slice(-1).join('>'), '*'].forEach(k => bump('n' + k, you));
    hist.push(you); rounds++;
    if (guess.move === you) reads++;
    const res = you === ai ? 'draw' : BEATS[ai] === you ? 'you' : 'ai';
    score[res]++;
    $('rpsYou').textContent = ICON[you]; $('rpsAi').textContent = ICON[ai];
    ['rpsYou', 'rpsAi'].forEach(id => { const el = $(id); el.classList.remove('pop'); void el.offsetWidth; el.classList.add('pop'); });
    $('rpsResult').textContent = res === 'draw' ? L('Draw', 'Empate') : res === 'you' ? L('You win this one', 'Ganhou esta') : L('The AI wins this one', 'A IA ganhou esta');
    $('rpsResult').className = 'rps-result ' + res;
    $('rpsScore').innerHTML = `${L('You', 'Você')} <b>${score.you}</b> · ${L('AI', 'IA')} <b>${score.ai}</b> · ${L('Draws', 'Empates')} <b>${score.draw}</b>`;
    $('rpsRead').innerHTML = rounds < 5
      ? L('The AI is still studying you…', 'A IA ainda o está a estudar…')
      : L(`The AI predicted your move <b>${Math.round(reads / rounds * 100)}%</b> of the time. Pure chance would be 33%.`, `A IA adivinhou a sua jogada <b>${Math.round(reads / rounds * 100)}%</b> das vezes. Ao acaso seria 33%.`);
    $('rpsThought').textContent = L(`It expected ${NAME(guess.move)} (${Math.round(guess.conf * 100)}% sure)`, `Esperava ${NAME(guess.move)} (${Math.round(guess.conf * 100)}% de certeza)`);
  };
  const rpsLabels = () => {
    $('rpsWhoYou').textContent = L('You', 'Você');
    $('rpsScore').innerHTML = `${L('You', 'Você')} <b>${score.you}</b> · ${L('AI', 'IA')} <b>${score.ai}</b> · ${L('Draws', 'Empates')} <b>${score.draw}</b>`;
  };
  rpsLabels(); document.addEventListener('langchange', rpsLabels);
  document.querySelectorAll('[data-rps]').forEach(b => b.addEventListener('click', () => playRPS(b.dataset.rps)));
  addEventListener('keydown', e => {
    if (!$('rps').matches(':hover') && !$('rps').contains(document.activeElement)) return;
    const k = { '1': 'rock', '2': 'paper', '3': 'scissors' }[e.key]; if (k) playRPS(k);
  });

  /* =============== 2b. Teach a neuron (a tiny neural network that learns live) =============== */
  const nnCv = $('nnCanvas'), nn = nnCv.getContext('2d');
  let pts = [], color = 1, nnRunning = true, epochs = 0;
  const H = 12;                         // hidden neurons
  const rnd = () => (Math.random() * 2 - 1) * .9;
  let W1, B1, W2, B2;
  const initNet = () => { W1 = Array.from({ length: H }, () => [rnd(), rnd()]); B1 = Array.from({ length: H }, rnd); W2 = Array.from({ length: H }, rnd); B2 = 0; epochs = 0; };
  const forward = (x, y) => {
    const h = new Array(H); let o = B2;
    for (let i = 0; i < H; i++) { h[i] = Math.tanh(W1[i][0] * x + W1[i][1] * y + B1[i]); o += W2[i] * h[i]; }
    return { h, p: 1 / (1 + Math.exp(-o)) };
  };
  const train = (steps) => {
    const lr = .12;
    for (let s = 0; s < steps; s++) for (const q of pts) {
      const { h, p } = forward(q.x, q.y), g = p - q.c;
      for (let i = 0; i < H; i++) {
        const gh = g * W2[i] * (1 - h[i] * h[i]);
        W2[i] -= lr * g * h[i];
        W1[i][0] -= lr * gh * q.x; W1[i][1] -= lr * gh * q.y; B1[i] -= lr * gh;
      }
      B2 -= lr * g;
    }
    epochs += steps;
  };
  const accuracy = () => pts.length ? pts.filter(q => (forward(q.x, q.y).p > .5 ? 1 : 0) === q.c).length / pts.length : 0;
  const PINK = [223, 143, 176], CYAN = [127, 203, 216];
  const drawNet = () => {
    const w = nnCv.width, h = nnCv.height, N = 46, cw = w / N, ch = h / N;
    for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) {
      const x = (i + .5) / N * 2 - 1, y = 1 - (j + .5) / N * 2, p = pts.length ? forward(x, y).p : .5;
      const c = p > .5 ? CYAN : PINK, a = Math.abs(p - .5) * .75;
      nn.fillStyle = `rgba(${c[0]},${c[1]},${c[2]},${a.toFixed(3)})`; nn.fillRect(i * cw, j * ch, cw + .5, ch + .5);
    }
    // the edge where the network changes its mind
    nn.fillStyle = 'rgba(15,14,12,1)';
    for (const q of pts) {
      const px = (q.x + 1) / 2 * w, py = (1 - q.y) / 2 * h, c = q.c ? CYAN : PINK;
      nn.beginPath(); nn.arc(px, py, 7, 0, 6.283); nn.fillStyle = '#0f0e0c'; nn.fill();
      nn.beginPath(); nn.arc(px, py, 5, 0, 6.283); nn.fillStyle = `rgb(${c[0]},${c[1]},${c[2]})`; nn.fill();
    }
    $('nnStats').innerHTML = pts.length < 2
      ? L('Add a few dots of each colour to start teaching.', 'Junte alguns pontos de cada cor para começar a ensinar.')
      : `${L('Learning rounds', 'Rondas de aprendizagem')} <b>${epochs.toLocaleString()}</b> · ${L('Gets right', 'Acerta')} <b>${Math.round(accuracy() * 100)}%</b> ${L('of your dots', 'dos seus pontos')}`;
  };
  const nnSize = () => { const r = nnCv.getBoundingClientRect(); const s = Math.round(r.width * Math.min(devicePixelRatio || 1, 2)); if (nnCv.width !== s) { nnCv.width = s; nnCv.height = s; } };
  nnCv.addEventListener('pointerdown', e => {
    const r = nnCv.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width * 2 - 1, y = 1 - (e.clientY - r.top) / r.height * 2;
    const c = e.button === 2 || e.shiftKey ? 1 - color : color;
    pts.push({ x, y, c });
  });
  nnCv.addEventListener('contextmenu', e => e.preventDefault());
  document.querySelectorAll('[data-nn-color]').forEach(b => b.addEventListener('click', () => {
    color = +b.dataset.nnColor;
    document.querySelectorAll('[data-nn-color]').forEach(x => x.setAttribute('aria-pressed', x === b));
  }));
  const PRESETS = {
    circle: () => { const out = []; for (let i = 0; i < 40; i++) { const a = Math.random() * 6.283, r = i % 2 ? .25 + Math.random() * .2 : .65 + Math.random() * .25; out.push({ x: Math.cos(a) * r, y: Math.sin(a) * r, c: i % 2 }); } return out; },
    xor: () => Array.from({ length: 40 }, () => { const x = Math.random() * 1.8 - .9, y = Math.random() * 1.8 - .9; return { x, y, c: x * y > 0 ? 1 : 0 }; }),
    sides: () => Array.from({ length: 30 }, () => { const x = Math.random() * 1.8 - .9, y = Math.random() * 1.8 - .9; return { x, y, c: x + y * .4 > 0 ? 1 : 0 }; }),
  };
  document.querySelectorAll('[data-nn-preset]').forEach(b => b.addEventListener('click', () => { pts = PRESETS[b.dataset.nnPreset](); initNet(); }));
  $('nnClear').addEventListener('click', () => { pts = []; initNet(); });
  initNet();
  pts = PRESETS.sides();
  let nnVisible = true;
  new IntersectionObserver(es => nnVisible = es[0].isIntersecting).observe(nnCv);
  const nnLoop = () => { if (nnVisible) { nnSize(); if (pts.length >= 2 && nnRunning) train(still ? 40 : 6); drawNet(); } requestAnimationFrame(nnLoop); };
  requestAnimationFrame(nnLoop);
  document.addEventListener('langchange', drawNet);

  /* =============== 2c. Which came first? =============== */
  const EVENTS = [
    { y: 1950, en: 'Alan Turing proposes the “imitation game” to test if machines can think', pt: 'Alan Turing propõe o “jogo da imitação” para testar se as máquinas pensam' },
    { y: 1956, en: 'The Dartmouth workshop that launched “artificial intelligence” as a field', pt: 'O encontro de Dartmouth que lançou a “inteligência artificial” como área' },
    { y: 1966, en: 'ELIZA, the first chatbot, starts talking to people at MIT', pt: 'O ELIZA, o primeiro chatbot, começa a conversar com pessoas no MIT' },
    { y: 1969, en: 'Humans land on the Moon', pt: 'O ser humano chega à Lua' },
    { y: 1983, en: 'The first mobile phone goes on sale', pt: 'O primeiro telemóvel é posto à venda' },
    { y: 1991, en: 'The World Wide Web goes public', pt: 'A World Wide Web abre ao público' },
    { y: 1997, en: 'IBM’s Deep Blue beats chess champion Garry Kasparov', pt: 'O Deep Blue da IBM vence o campeão de xadrez Garry Kasparov' },
    { y: 1998, en: 'Google is founded', pt: 'A Google é fundada' },
    { y: 2007, en: 'The first iPhone is released', pt: 'É lançado o primeiro iPhone' },
    { y: 2009, en: 'Bitcoin is launched', pt: 'O Bitcoin é lançado' },
    { y: 2011, en: 'IBM Watson wins the TV quiz show Jeopardy!', pt: 'O IBM Watson ganha o concurso televisivo Jeopardy!' },
    { y: 2011, en: 'Apple puts Siri on the iPhone', pt: 'A Apple põe a Siri no iPhone' },
    { y: 2012, en: 'AlexNet’s image-recognition win sparks the deep learning boom', pt: 'A vitória do AlexNet em reconhecimento de imagem lança a era do deep learning' },
    { y: 2016, en: 'AlphaGo beats Go master Lee Sedol', pt: 'O AlphaGo vence o mestre de Go Lee Sedol' },
    { y: 2017, en: 'Google researchers publish the “Transformer”, the T in ChatGPT', pt: 'Investigadores da Google publicam o “Transformer”, o T do ChatGPT' },
    { y: 2020, en: 'AlphaFold cracks the 50-year protein-folding problem', pt: 'O AlphaFold resolve o problema de 50 anos do enrolamento das proteínas' },
    { y: 2022, en: 'ChatGPT is launched', pt: 'O ChatGPT é lançado' },
    { y: 2024, en: 'AI pioneers win the Nobel Prizes in Physics and Chemistry', pt: 'Pioneiros da IA ganham os Nobel da Física e da Química' },
  ];
  let qPair = null, qScore = 0, qRound = 0, qStreak = 0, qBest = store.get('ai-quiz-best') || 0, qLocked = false;
  const newPair = () => {
    let a, b;
    do { a = EVENTS[Math.random() * EVENTS.length | 0]; b = EVENTS[Math.random() * EVENTS.length | 0]; } while (a === b || a.y === b.y);
    qPair = [a, b]; qLocked = false;
    renderQuiz();
  };
  const renderQuiz = (picked) => {
    const [a, b] = qPair;
    ['qA', 'qB'].forEach((id, i) => {
      const ev = qPair[i], el = $(id);
      el.querySelector('.q-text').textContent = PT() ? ev.pt : ev.en;
      el.querySelector('.q-year').textContent = picked ? ev.y : '';
      el.classList.remove('right', 'wrong');
      if (picked) { if (ev.y < qPair[1 - i].y) el.classList.add('right'); else if (picked === id) el.classList.add('wrong'); }
      el.disabled = !!picked;
    });
    $('qScore').innerHTML = `${L('Score', 'Pontos')} <b>${qScore}/${qRound}</b> · ${L('Streak', 'Seguidas')} <b>${qStreak}</b> · ${L('Best', 'Recorde')} <b>${qBest}</b>`;
    $('qNext').hidden = !picked;
  };
  const answer = id => {
    if (qLocked) return; qLocked = true;
    const i = id === 'qA' ? 0 : 1, ok = qPair[i].y < qPair[1 - i].y;
    qRound++; if (ok) { qScore++; qStreak++; if (qStreak > qBest) { qBest = qStreak; store.set('ai-quiz-best', qBest); } } else qStreak = 0;
    const gap = Math.abs(qPair[0].y - qPair[1].y);
    $('qFeedback').textContent = ok ? L(`Right! ${gap} year${gap === 1 ? '' : 's'} apart.`, `Certo! ${gap} ano${gap === 1 ? '' : 's'} de diferença.`)
                                    : L(`Not this time: ${gap} year${gap === 1 ? '' : 's'} apart.`, `Desta vez não: ${gap} ano${gap === 1 ? '' : 's'} de diferença.`);
    $('qFeedback').className = 'q-feedback ' + (ok ? 'good' : 'bad');
    renderQuiz(id);
  };
  $('qA').addEventListener('click', () => answer('qA'));
  $('qB').addEventListener('click', () => answer('qB'));
  $('qNext').addEventListener('click', () => { $('qFeedback').textContent = ''; newPair(); });
  document.addEventListener('langchange', () => renderQuiz(qLocked ? (qPair[0].y < qPair[1].y ? 'qA' : 'qB') : null));
  newPair();

  /* game tabs */
  document.querySelectorAll('.game-tabs button').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.game-tabs button').forEach(x => x.setAttribute('aria-selected', x === b));
    document.querySelectorAll('.game').forEach(g => g.hidden = g.id !== b.dataset.game);
  }));

  /* =============== 3. Before & after cards =============== */
  document.querySelectorAll('.flip').forEach(c => {
    const turn = () => c.classList.toggle('on');
    c.addEventListener('click', turn);
    c.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') c.classList.remove('on'); });   // with a mouse, a card only stays turned while you point at it
    c.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); turn(); } });
  });

  /* header background, reveal on scroll */
  const nav = document.getElementById('nav');
  addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  document.getElementById('year').textContent = new Date().getFullYear();
})();
