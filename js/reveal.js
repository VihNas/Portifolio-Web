/* reveal.js — Animações de entrada: adiciona .is-visible aos elementos .reveal com IntersectionObserver. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    if (reduceMotion) el.classList.add('is-visible');
    else observer.observe(el);
  });
}());

