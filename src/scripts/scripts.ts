import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

(() => {
  window.onload = function() {
    // write code inside of here. this is a self contained wrapper that runs on page load.

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

    const collection = document.querySelector('.collection');
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const singles = document.querySelectorAll(".single");
    
    function scrollToTop(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrollToTopBtn.classList.add("showScrollButton");
        } else {
          scrollToTopBtn.classList.remove("showScrollButton");
        }
      });
    }

    let observer = new IntersectionObserver(scrollToTop);
    observer.observe(collection);


    gsap.set(document.querySelectorAll(".titles"), { opacity: 0 });
    gsap.set(document.querySelector(".grid"), { opacity: 0 });


    imagesLoaded(document.body, () => {
    
      const timeline = gsap.timeline();
      timeline.to(document.querySelectorAll(".titles"), { opacity: 1, duration: 2, stagger: 0.3});
      gsap.to(document.querySelector(".grid"), { opacity: 1, delay: 2.5 });
    });
  }
})();