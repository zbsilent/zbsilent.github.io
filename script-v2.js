(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const visual = document.querySelector('.hero-visual');
  const catCard = document.querySelector('.cat-card');
  const legacyDog = document.querySelector('.dog-layer');
  if (legacyDog) legacyDog.remove();
  if (visual && !visual.querySelector('.cat-layer')) {
    const cat = document.createElement('div');
    cat.className = 'cat-layer';
    cat.innerHTML = '<img src="./assets/cat-head.png" alt="一只会随鼠标轻轻晃动的猫"><span class="cat-shadow" aria-hidden="true"></span>';
    visual.appendChild(cat);
  }
  if (typeof gsap === 'undefined') return;
  if (!reduced) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.site-header', { y: -24, autoAlpha: 0, duration: .8, ease: 'power3.out' });
    gsap.from('.hero-copy > *', { y: 30, autoAlpha: 0, duration: .85, stagger: .1, delay: .15, ease: 'power3.out' });
    gsap.from('.character-frame', { y: 35, scale: .97, autoAlpha: 0, duration: 1.1, delay: .25, ease: 'power3.out' });
    gsap.from('.cat-layer', { y: 26, autoAlpha: 0, duration: .8, delay: .6, ease: 'back.out(1.4)' });
    gsap.to('.visual-orbit', { rotation: 348, duration: 18, repeat: -1, ease: 'none' });
    gsap.utils.toArray('.reveal').forEach((item) => {
      if (item.classList.contains('hero-copy') || item.classList.contains('hero-visual')) return;
      gsap.from(item, { y: 34, autoAlpha: 0, duration: .85, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 84%', once: true } });
    });
    gsap.to('.character-frame', { y: -28, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
  }
  const move = (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 2;
    const y = (event.clientY / window.innerHeight - .5) * 2;
    if (visual) {
      visual.style.setProperty('--eye-x', `${x * 8}px`);
      visual.style.setProperty('--eye-y', `${y * 4}px`);
      visual.style.setProperty('--cat-x', `${x * 10}px`);
      visual.style.setProperty('--cat-y', `${y * 3}px`);
      visual.style.setProperty('--cat-r', `${x * 5}deg`);
      if (!reduced) gsap.to(visual, { rotation: x * .5, duration: .35, overwrite: 'auto', ease: 'power2.out' });
    }
    if (catCard) {
      catCard.style.setProperty('--cat-x', `${x * 5}px`);
      catCard.style.setProperty('--cat-y', `${y * 3}px`);
      catCard.style.setProperty('--cat-r', `${x * 2}deg`);
    }
  };
  window.addEventListener('pointermove', move, { passive: true });
})();
