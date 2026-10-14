/* menu.js — Menu mobile: abrir/fechar, fechar ao clicar em link, fechar com tecla Esc e devolver foco. */
(function () {
  'use strict';

  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.main-nav');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link, .nav-cta'));

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener('click', function () { setMenu(false); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setMenu(false);
      if (menuToggle) menuToggle.focus();
    }
  });
}());

