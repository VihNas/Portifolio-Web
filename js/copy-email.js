/* copy-email.js — Copia o texto do atributo data-copy ao clicar e exibe um toast de confirmação. */
(function () {
  'use strict';

  var toast = document.querySelector('.toast');
  var toastTimer;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2200);
  }

  function fallbackCopy(text) {
    var area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    var ok = document.execCommand('copy');
    area.remove();
    return ok;
  }

  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.dataset.copy;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          showToast('E-mail copiado! ✦');
        }).catch(function () {
          if (!fallbackCopy(text)) showToast('Não foi possível copiar. Tente manualmente.');
          else showToast('E-mail copiado! ✦');
        });
      } else {
        if (!fallbackCopy(text)) showToast('Não foi possível copiar. Tente manualmente.');
        else showToast('E-mail copiado! ✦');
      }
    });
  });
}());

