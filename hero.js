/*
  The opening screen. Behind the two halves sit two pictures: the DJ photo (music) and Earth
  at night from orbit with the journey's flight paths (business). They fade into each other in
  the middle. On top, this canvas draws sound waves that leave the music side, turn from rose
  to gold, and flow into the city lights. The cities on the picture glow softly; point at one to
  see the role there, click to open it on the Business page.
*/
(() => {
  const canvas = document.getElementById('heroFx');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const doors = canvas.closest('.doors');
  const bizDoor = doors.querySelector('.door.biz');
  const bizImg = doors.querySelector('.biz-photo img');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // where each place sits in business.jpg (fractions of the picture's width and height)
  const PLACES = [
    { name: 'Braga', year: '2023', fx: .3739, fy: .3091, job: 'job-2', role: 'Head of Sales', side: -1 },
    { name: 'Barcelona', year: '2019', fx: .4908, fy: .3081, job: 'job-5', role: 'BBA, Business Administration', side: 1 },
    { name: 'Luanda', fx: .6492, fy: .8337, now: true, job: 'job-1', role: 'Head of HR', side: 1 },
  ];
  const ROSE = [223, 143, 176], GOLD = [217, 180, 108], CREAM = [246, 236, 214];
  const rgba = (c, a) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${Math.max(0, Math.min(1, a)).toFixed(3)})`;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const sstep = (a, b, x) => { const k = clamp((x - a) / (b - a), 0, 1); return k * k * (3 - 2 * k); };

  let w = 0, h = 0, dpr = 1, phone = false, seam = 0, target = { x: 0, y: 0 }, avoid = [];
  // map a point of the picture to the canvas, following object-fit: cover and object-position
  const placeOnScreen = (fx, fy) => {
    if (!bizImg || !bizImg.naturalWidth) return null;
    const cr = canvas.getBoundingClientRect(), r = bizImg.getBoundingClientRect();
    const iw = bizImg.naturalWidth, ih = bizImg.naturalHeight, s = Math.max(r.width / iw, r.height / ih);
    const pos = getComputedStyle(bizImg).objectPosition.split(' ').map(v => parseFloat(v) / 100);
    const ox = (r.width - iw * s) * (isNaN(pos[0]) ? .5 : pos[0]), oy = (r.height - ih * s) * (isNaN(pos[1]) ? .5 : pos[1]);
    return { x: r.left - cr.left + ox + fx * iw * s, y: r.top - cr.top + oy + fy * ih * s };
  };
  const build = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    phone = w < 761; seam = w / 2;
    // the waves flow towards Europe's lights
    const eu = placeOnScreen(.47, .38);
    target = eu && eu.x > seam ? eu : { x: w * .72, y: h * .45 };
    // keep the city dots clear of the titles and buttons
    const cr = canvas.getBoundingClientRect();
    avoid = [...doors.querySelectorAll('.door-label > span, .door-go'), ...document.querySelectorAll('.jog, .eyebrow, .hero-lede, .statement, .tag, h1 .row')]
      .map(el => el.getBoundingClientRect()).filter(r => r.width)
      .map(r => ({ l: r.left - cr.left - 16, t: r.top - cr.top - 16, r: r.right - cr.left + 16, b: r.bottom - cr.top + 16 }));
  };
  const blocked = (x, y, x2 = x, y2 = y) => avoid.some(a => x2 > a.l && x < a.r && y2 > a.t && y < a.b);

  /* pointer */
  let mx = -9999, my = -9999, hover = null, glow = {}, shown = [];
  addEventListener('pointermove', e => {
    const r = canvas.getBoundingClientRect();
    mx = e.clientX - r.left; my = e.clientY - r.top;
    const p = e.pointerType === 'mouse' ? hit(e.clientX, e.clientY) : null;
    hover = p ? p.name : null;
    bizDoor.classList.toggle('on-place', !!p);
    const cur = document.getElementById('cursor'); if (cur) cur.classList.toggle('aim', !!p);
  }, { passive: true });
  const hit = (x, y, touch) => {
    const r = canvas.getBoundingClientRect(), R = touch ? 30 : 24;
    let best = null, bd = R * R;
    shown.forEach(p => { const dx = p.sx - (x - r.left), dy = p.sy - (y - r.top), d = dx * dx + dy * dy; if (d < bd) { bd = d; best = p; } });
    return best;
  };
  bizDoor.addEventListener('click', e => {
    const p = hit(e.clientX, e.clientY, e.pointerType !== 'mouse');
    if (!p) return;                                      // anywhere else: the normal Business link
    e.preventDefault();
    location.href = `business/#${p.job}`;
  });

  let t = 0;
  const draw = () => {
    ctx.clearRect(0, 0, w, h);

    /* sound waves: rose on the music side, gold as they cross into the business side */
    const endX = target.x, LINES = phone ? 12 : 18;
    const top = phone ? h * .2 : h * .28, span = phone ? h * .32 : h * .44;
    for (let i = 0; i < LINES; i++) {
      const q = i / (LINES - 1), baseY = top + span * q;
      const a = .05 + .16 * Math.sin(Math.PI * q);
      const g = ctx.createLinearGradient(0, 0, endX, 0);
      g.addColorStop(0, rgba(ROSE, a * .6)); g.addColorStop(clamp(seam / endX - .08, 0, 1), rgba(ROSE, a));
      g.addColorStop(clamp(seam / endX + .1, 0, 1), rgba(GOLD, a * .9)); g.addColorStop(1, rgba(GOLD, 0));
      ctx.strokeStyle = g; ctx.lineWidth = 1; ctx.beginPath();
      for (let x = 0; x <= endX; x += 8) {
        const n = x / endX, env = sstep(0, .2, n) * (1 - .55 * sstep(.6, 1, n));
        let y = baseY + Math.sin(n * 8 + t * .6 + i * .35) * 10 * env + Math.sin(n * 21 - t * .9 + i * .6) * 4 * env;
        y += (target.y - baseY) * Math.pow(sstep(.45, 1, n), 1.6) * .75;    // gathering into the city lights
        const dx = x - mx, dy = y - my, d = Math.exp(-(dx * dx + dy * dy) / 22000);
        y += Math.sin(x * .045 - t * 3) * 18 * d;
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    /* the places on the picture */
    const pt = window.I18N && I18N.lang === 'pt';
    ctx.font = `500 ${phone ? 9 : 10.5}px Inter, system-ui, sans-serif`; ctx.textBaseline = 'middle';
    if ('letterSpacing' in ctx) ctx.letterSpacing = phone ? '1.2px' : '2px';
    shown = [];
    PLACES.forEach(p => {
      const s = placeOnScreen(p.fx, p.fy);
      if (!s || s.x < seam + 8 || s.x > w - 8 || s.y < 0 || s.y > h * .96 || blocked(s.x, s.y)) return;    // only where the picture shows it
      p.sx = s.x; p.sy = s.y; shown.push(p);
    });
    shown.forEach(p => {
      const hv = glow[p.name] = (glow[p.name] || 0) + ((hover === p.name ? 1 : 0) - (glow[p.name] || 0)) * .18;
      // a slow breathing ring so people notice the places are alive
      const q = ((t * .4) + (p.now ? 0 : .5)) % 1;
      ctx.strokeStyle = rgba(GOLD, (p.now ? .7 : .45) * (1 - q)); ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(p.sx, p.sy, 6 + q * (p.now ? 26 : 18), 0, 6.283); ctx.stroke();
      if (hv > .02) { ctx.strokeStyle = rgba(CREAM, .8 * hv); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(p.sx, p.sy, 10 + hv * 4, 0, 6.283); ctx.stroke(); }
      ctx.fillStyle = rgba(CREAM, .9); ctx.beginPath(); ctx.arc(p.sx, p.sy, (p.now ? 3.6 : 2.6) + hv, 0, 6.283); ctx.fill();
      if (!p.now && hv < .3) return;                       // names appear on hover, so they never crowd the titles
      const name = p.name.toUpperCase(), tail = p.now ? (pt ? 'AGORA' : 'NOW') : p.year;
      const gapW = ctx.measureText('  ').width, nameW = ctx.measureText(name).width, total = nameW + gapW + ctx.measureText(tail).width;
      let x = p.side > 0 ? p.sx + 14 : p.sx - 14 - total;
      if (x + total > w - 8) x = p.sx - 14 - total;
      if (x < seam + 6) x = p.sx + 14;
      if (hv < .3 && blocked(x + 12, p.sy - 4, x + total - 12, p.sy + 4)) return;   // the label would sit on top of text
      const y = p.sy;
      ctx.shadowColor = 'rgba(10,10,8,.95)'; ctx.shadowBlur = 8; ctx.textAlign = 'left';
      ctx.fillStyle = `rgba(233,226,212,${Math.min(1, (p.now ? .95 : .8) + hv)})`; ctx.fillText(name, x, y);
      ctx.fillStyle = rgba(GOLD, 1); ctx.fillText(tail, x + nameW + gapW, y);
      if (hv > .02) {
        const role = (window.I18N ? I18N.t(p.role) : p.role) + '  →';
        const f = ctx.font; ctx.font = `italic 400 ${phone ? 13 : 16}px "Instrument Serif", Georgia, serif`;
        if ('letterSpacing' in ctx) ctx.letterSpacing = '0px';
        const rw = ctx.measureText(role).width, rx = clamp(x, seam + 6, w - 8 - rw);
        ctx.fillStyle = rgba(GOLD, hv); ctx.fillText(role, rx, y + 18);
        ctx.font = f; if ('letterSpacing' in ctx) ctx.letterSpacing = phone ? '1.2px' : '2px';
      }
      ctx.shadowBlur = 0;
    });
  };

  /* the jog wheel: turns gently, spins up when you point at it */
  const jog = document.querySelector('.jog .platter');
  let jogA = 0, jogV = .25, jogHot = false;
  const jogLink = jog && jog.closest('.jog');
  if (jogLink) {
    jogLink.addEventListener('pointerenter', () => jogHot = true); jogLink.addEventListener('pointerleave', () => jogHot = false);
    jogLink.addEventListener('focus', () => jogHot = true); jogLink.addEventListener('blur', () => jogHot = false);
  }

  build(); addEventListener('resize', build);
  if (bizImg && !bizImg.complete) bizImg.addEventListener('load', build);
  document.fonts && document.fonts.ready.then(build);
  document.addEventListener('langchange', () => setTimeout(build, 500));
  let visible = true;
  new IntersectionObserver(([en]) => visible = en.isIntersecting).observe(canvas);
  let last = performance.now();
  const loop = now => {
    const dt = Math.max(0, Math.min(.05, (now - last) / 1000)); last = now;   // frames can report a time slightly in the past
    if (visible) {
      t += dt;
      draw();
      if (jog) { jogV += ((jogHot ? 1.4 : .22) - jogV) * .06; jogA = (jogA + jogV * dt * 360) % 360; jog.style.transform = `rotate(${jogA}deg)`; }
    }
    requestAnimationFrame(loop);
  };
  if (still) { t = 4; draw(); } else requestAnimationFrame(loop);
})();
