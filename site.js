/*
  Shared header behaviour for every page: keeps the menu links exactly centred and makes sure
  no header item ever touches another, at any screen width and in either language.
*/
(() => {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const links = nav.querySelector('.nav-links');
  const logo = nav.querySelector('.logo');
  // on the home page the links repeat what the opening screen offers, so on small screens they can step aside
  const optional = nav.dataset.links === 'optional';
  const GAP = 18;   // the least space allowed between header items

  /* Business is the main link; the other fields Tiago is drawn to open from a small menu beside it */
  const AREAS = [
    { path: 'ai/', name: 'AI', note: 'News, games & milestones' },
    { path: 'crypto/', name: 'Blockchain', note: 'Live crypto prices' },
  ];
  const buildDrop = () => {
    const all = links ? [...links.querySelectorAll(':scope > a')] : [];
    const biz = all.find(a => a.textContent.trim() === 'Business');
    if (!biz) return;
    const base = (logo && logo.getAttribute('href').startsWith('#')) ? '' : '../';
    all.filter(a => AREAS.some(x => a.textContent.trim() === x.name)).forEach(a => a.remove());
    const here = AREAS.find(x => location.pathname.includes('/' + x.path));
    const drop = document.createElement('div'); drop.className = 'nav-drop';
    biz.replaceWith(drop); drop.append(biz);
    if (here) biz.classList.add('parent-current');
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'nav-drop-btn'; btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'navMenu'); btn.setAttribute('aria-label', 'More areas');
    btn.innerHTML = '<svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const menu = document.createElement('div'); menu.className = 'nav-menu'; menu.id = 'navMenu';
    menu.innerHTML = AREAS.map(x => `<a href="${base}${x.path}"${x === here ? ' aria-current="page"' : ''}><b>${x.name}</b><small>${x.note.replace('&', '&amp;')}</small></a>`).join('');
    drop.append(btn, menu);
    const setOpen = on => { drop.classList.toggle('open', on); btn.setAttribute('aria-expanded', on); };
    btn.addEventListener('click', e => { e.stopPropagation(); setOpen(!drop.classList.contains('open')); });
    document.addEventListener('click', e => { if (!drop.contains(e.target)) setOpen(false); });
    drop.addEventListener('keydown', e => { if (e.key === 'Escape') { setOpen(false); btn.focus(); } });
    drop.addEventListener('focusout', e => { if (!drop.contains(e.relatedTarget)) setOpen(false); });
    addEventListener('scroll', () => setOpen(false), { passive: true });
  };
  buildDrop();

  const box = el => el && el.getBoundingClientRect();
  const touching = () => {
    const end = nav.querySelector('.nav-end') || nav.querySelector('.pill');
    const l = box(logo), m = box(links), r = box(end);
    if (!m || m.width === 0) return false;
    const sameRow = (a, b) => a && b && a.bottom > b.top && b.bottom > a.top;
    return (sameRow(l, m) && m.left < l.right + GAP) || (sameRow(m, r) && r.left < m.right + GAP);
  };

  const fit = () => {
    if (!links) return;
    nav.classList.add('nav-measuring');
    nav.classList.remove('nav-tight', 'nav-rows', 'nav-hide-links');
    if (touching()) {
      nav.classList.add('nav-tight');
      if (touching()) {
        nav.classList.remove('nav-tight');
        nav.classList.add(optional ? 'nav-hide-links' : 'nav-rows');
      }
    }
    nav.classList.remove('nav-measuring');
  };

  let raf = 0;
  const later = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); };
  addEventListener('resize', later);
  document.addEventListener('langchange', () => setTimeout(fit, 0));
  document.fonts && document.fonts.ready.then(fit);
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fit) : fit();
  window.SITE = { fitNav: fit };
})();
