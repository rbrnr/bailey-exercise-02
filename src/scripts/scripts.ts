import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';
import imagesLoaded from 'imagesloaded';

gsap.registerPlugin(SplitText);

function initIntro() {
  gsap.set('#h1', { opacity: 0 });
  gsap.set('#h2', { opacity: 0 });
  gsap.set('#h3', { opacity: 0 });
  gsap.set('.grid', { opacity: 0 });
}

function goIntro() {
  const h1 = new SplitText('#h1', { type: 'words,chars' });
  const h2 = new SplitText('#h2', { type: 'words,chars' });
  const h3 = new SplitText('#h3', { type: 'words,chars' });
  
  const introTL = gsap.timeline();
  introTL.set(h1.chars, { opacity: 0, y: 20 });
  introTL.set(h2.chars, { opacity: 0, y: 20 });
  introTL.set(h3.chars, { opacity: 0, y: 20 });
  introTL.set(document.querySelectorAll('.grid .cell'), { opacity: 0, y: 20 });
  introTL.set('#h1', { opacity: 1 });
  introTL.set('#h2', { opacity: 1 });
  introTL.set('#h3', { opacity: 1 });
  introTL.set('.grid', { opacity: 1 });
  introTL.to(h1.chars, { opacity: 1, y: 0, duration: 1, stagger: .015, ease: 'Power2.easeOut' }, .5);
  introTL.to(h2.chars, { opacity: 1, y: 0, duration: 1, stagger: .015, ease: 'Power2.easeOut' }, '>-.7');
  introTL.to(h3.chars, { opacity: 1, y: 0, duration: 1, stagger: .015, ease: 'Power2.easeOut' }, '>-.7');
  introTL.to(document.querySelectorAll('.grid .cell'), { opacity: 1, y: 0, duration: 1, stagger: .035, ease: 'Power2.easeOut' }, '>-1');

  introTL.play();
};

(() => {
  const splits = {};
  let gridZIndex = 0;

  let io = new IntersectionObserver((entries) => {
    let intersecting = false;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        intersecting = true;
        const target = (entry.target as HTMLElement);
        gsap.to(document.body, { backgroundColor: target.dataset.color, duration: 1 });

        if (!target.classList.contains('inview')) {
          if (splits.hasOwnProperty(target.id)) {
            target.classList.add('inview');

            const tl = gsap.timeline();
            tl.to(splits[target.id].h2.chars, { opacity: 1, y: 0, duration: 1, stagger: .025, ease: 'Power2.easeOut' });
            tl.to(splits[target.id].p.lines, { opacity: 1, y: 0, duration: 1, stagger: .025, ease: 'Power2.easeOut' }, '>-.9');
          }
        }
      }
    });
    
    if (!intersecting) {
      gsap.to(document.body, { backgroundColor: '#fff', duration: 1 });
      document.querySelector('.scroll-to-top').classList.remove('is-visible');
    } else {
      document.querySelector('.scroll-to-top').classList.add('is-visible');
    }
  }, { threshold: .51 });

  document.querySelectorAll('.grid .cell').forEach(cell => {
    cell.querySelector('a').addEventListener('click', (e) => {
      e.preventDefault();
      window.scroll({
        top: document.getElementById((e.currentTarget as HTMLAnchorElement).getAttribute('href').replace('#', '')).getBoundingClientRect().top, 
        left: 0, 
        behavior: 'smooth'
      });
    });
    cell.addEventListener('mouseenter', (e) => {
      gridZIndex += 1;
      (e.currentTarget as HTMLElement).style.zIndex = gridZIndex.toString();
    });
  });

  document.querySelectorAll('.single').forEach(single => {
    io.observe(single);

    splits[single.id] = {
      h2: new SplitText(single.querySelector('h2'), { type: 'words,chars' }),
      p: new SplitText(single.querySelector('p'), { type: 'lines,words' })
    };

    gsap.set(splits[single.id].h2.chars, { opacity: 0, y: 20 });
    gsap.set(splits[single.id].p.lines, { opacity: 0, y: 15 });
  });

  document.querySelector('.scroll-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0, 
      behavior: 'smooth'
    });
  });

  initIntro();

  imagesLoaded(document.body, () => {
    goIntro();
  });

})();