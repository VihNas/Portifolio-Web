/* header.js — Adiciona/remove a classe .scrolled no header conforme o scroll (throttle via rAF). */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  if (!header) return;

  var ticking = false;

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 8);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });

  onScroll(); /* estado inicial */
}());

