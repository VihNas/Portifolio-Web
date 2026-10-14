/* scrollspy.js — Marca o link de navegação ativo conforme a seção visível no scroll. */
(function () {
  'use strict';

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.id;
      navLinks.forEach(function (link) {
        var active = link.getAttribute('href') === '#' + id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(function (section) { spy.observe(section); });
}());

