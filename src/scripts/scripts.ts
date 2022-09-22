import { gsap } from 'gsap';
import imagesLoaded from 'imagesloaded';

(() => {
  window.onload = function() {
    // write code inside of here. this is a self contained wrapper that runs on page load.

    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

    const collection = document.querySelector('.collection');
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    const singles = document.querySelectorAll(".single");
    
    function callback(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          scrollToTopBtn.classList.add("showScrollButton");
        } else {
          scrollToTopBtn.classList.remove("showScrollButton");
        }
      });
    }

    let observer = new IntersectionObserver(callback);
    observer.observe(collection);

    let io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          modify(entry.target);
        } else {
          revert(entry.target);
        }
      })
    }, {
      threshold: 0.8
    })
    
    function modify(el) {
      if (el.id === "snorlax") {
          document.body.style.backgroundColor = 'grey';   
          document.body.style.transition = '1s';    
      }
      if (el.id === "squirtle") {
        document.body.style.backgroundColor = 'blue';
        document.body.style.transition = '1s';
      }
      if (el.id === "jigglypuff") {
        document.body.style.backgroundColor = 'purple';
        document.body.style.transition = '1s';
      }
      if (el.id === "rowlet") {
        document.body.style.backgroundColor = 'green';
        document.body.style.transition = '1s';
      }
      if (el.id === "munchlax") {
        document.body.style.backgroundColor = 'white';
        document.body.style.transition = '1s';
      }
      if (el.id === "grookey") {
        document.body.style.backgroundColor = 'green';
        document.body.style.transition = '1s';
      }
      if (el.id === "snom") {
        document.body.style.backgroundColor = 'blue';
        document.body.style.transition = '1s';
      }
      if (el.id === "wobbuffet") {
        document.body.style.backgroundColor = 'purple';
        document.body.style.transition = '1s';
      }
      if (el.id === "chansey") {
        document.body.style.backgroundColor = 'grey';
        document.body.style.transition = '1s';
      }
      if (el.id === "clobbopus") {
        document.body.style.backgroundColor = 'orange';
        document.body.style.transition = '1s';
      }
      if (el.id === "lapras") {
        document.body.style.backgroundColor = 'blue';
        document.body.style.transition = '1s';
      }
      if (el.id === "cubone") {
        document.body.style.backgroundColor = 'orange';
        document.body.style.transition = '1s';
      }
      if (el.id === "mightyena") {
        document.body.style.backgroundColor = 'white';
        document.body.style.transition = '1s';
      }
      if (el.id === "pikachu") {
        document.body.style.backgroundColor = 'yellow';
        document.body.style.transition = '1s';
      }
      if (el.id === "arcanine") {
        document.body.style.backgroundColor = 'red';
        document.body.style.transition = '1s';
      }
    }
    
    function revert(el) {
      if (el.id === "snorlax") {
        el.style.backgroundColor = 'initial';
        document.body.style.transition = '1s';  
      }
      if (el.id === "squirtle") {
        el.style.backgroundColor = 'initial';
        document.body.style.transition = '1s';
      }
    }
    
    io.observe(document.querySelector('body'));
    io.observe(document.querySelector('#snorlax'));
    io.observe(document.querySelector('#squirtle'));
    io.observe(document.querySelector('#jigglypuff'));
    io.observe(document.querySelector('#rowlet'));
    io.observe(document.querySelector('#munchlax'));
    io.observe(document.querySelector('#grookey'));
    io.observe(document.querySelector('#snom'));
    io.observe(document.querySelector('#wobbuffet'));
    io.observe(document.querySelector('#chansey'));
    io.observe(document.querySelector('#clobbopus'));
    io.observe(document.querySelector('#lapras'));
    io.observe(document.querySelector('#cubone'));
    io.observe(document.querySelector('#mightyena'));
    io.observe(document.querySelector('#pikachu'));
    io.observe(document.querySelector('#arcanine'));

    gsap.set(document.querySelectorAll(".titles"), { opacity: 0 });
    gsap.set(document.querySelector(".grid"), { opacity: 0 });
    gsap.set(document.querySelector(".collection"), { opacity: 0 });


    imagesLoaded(document.body, () => {
    
      const timeline = gsap.timeline();
      timeline.to(document.querySelectorAll(".titles"), { opacity: 1, duration: 2, stagger: 0.3});
      gsap.to(document.querySelector(".collection"), { opacity: 1, duration: 2 });
      gsap.to(document.querySelector(".grid"), { opacity: 1, delay: 2.5 });
    });
  }
})();