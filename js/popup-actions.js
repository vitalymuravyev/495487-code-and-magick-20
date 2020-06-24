'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var setupOpenIcon = document.querySelector('.setup-open');
  var setupCloseButton = setupWindow.querySelector('.setup-close');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColorField = document.querySelector('input[name=fireball-color]');
  var coat = document.querySelector('.wizard-coat');
  var coatColorField = document.querySelector('input[name=coat-color]');
  var eyes = document.querySelector('.wizard-eyes');
  var eyesColorField = document.querySelector('input[name=eyes-color]');

  function onPopupEscPress(evt) {
    if (evt.key === 'Escape' && !(document.activeElement.classList.contains('setup-user-name'))) {
      evt.preventDefault();
      closePopup();
    }
  }

  function openPopup() {
    setupWindow.classList.remove('hidden');

    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    setupWindow.classList.add('hidden');

    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpenIcon.addEventListener('click', openPopup);

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openPopup();
    }
  });

  setupCloseButton.addEventListener('click', function () {
    closePopup();
  });

  setupCloseButton.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      closePopup();
    }
  });

  coat.addEventListener('click', function () {
    window.changeColor(coat, coatColorField, window.utils.COAT_COLORS);
  });


  fireball.addEventListener('click', function () {
    window.changeColor(fireball, fireballColorField, window.utils.FIREBALL_COLORS);
  });

  eyes.addEventListener('click', function () {
    window.changeColor(eyes, eyesColorField, window.utils.EYES_COLORS);
  });

})();
