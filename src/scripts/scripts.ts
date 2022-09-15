import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

(() => {
  window.onload = function() {
    // write code inside of here. this is a self contained wrapper that runs on page load.

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          
        }
      });
    }, { threshold: .15 });
    
    gsap.set(document.body, { opacity: 0 });

    imagesLoaded(document.body, () => {
      gsap.to(document.body, { opacity: 1, duration: 1 });

      // const timeline = gsap.timeline();
      // timeline.to(document.body, { opacity: 1, duration: 1 });
    });
  }
})();