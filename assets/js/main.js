/* alteregø — comportamenti minimi: menu mobile e rivelazione allo scroll. */

document.documentElement.classList.remove('no-js');

/* --- Menu mobile -------------------------------------------------------- */

const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');

if (toggle && nav) {
  const setOpen = (open) => {
    nav.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Chiudi' : 'Menu';
  };

  setOpen(false);

  toggle.addEventListener('click', () => {
    setOpen(nav.dataset.open !== 'true');
  });

  /* Chiudi scegliendo una voce, o con Escape */
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.dataset.open === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

  /* Tornando al desktop il menu non deve restare in stato aperto */
  const wide = window.matchMedia('(min-width: 721px)');
  wide.addEventListener('change', (e) => { if (e.matches) setOpen(false); });
}

/* --- Rivelazione allo scroll -------------------------------------------- */

const revealables = document.querySelectorAll('.reveal');

if (revealables.length) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    revealables.forEach((el) => el.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });

    revealables.forEach((el) => observer.observe(el));
  }
}
