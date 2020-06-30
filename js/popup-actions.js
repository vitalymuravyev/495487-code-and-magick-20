'use strict';

(function () {
  var setupWindow = document.querySelector('.setup');
  var basisPopupX = setupWindow.style.left;
  var basisPopupY = setupWindow.style.top;
  var setupOpenIcon = document.querySelector('.setup-open');
  var setupCloseButton = setupWindow.querySelector('.setup-close');
  var popupHandle = setupWindow.querySelector('.upload');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var fireballColorField = document.querySelector('input[name=fireball-color]');
  var coat = document.querySelector('.wizard-coat');
  var coatColorField = document.querySelector('input[name=coat-color]');
  var eyes = document.querySelector('.wizard-eyes');
  var eyesColorField = document.querySelector('input[name=eyes-color]');
  var form = setupWindow.querySelector('.setup-wizard-form');

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
    setupWindow.style.left = basisPopupX;
    setupWindow.style.top = basisPopupY;
    document.removeEventListener('keydown', onPopupEscPress);
  }

  function removeClick(clickEvt) {
    clickEvt.preventDefault();
  }

  function onSuccess() {
    setupWindow.classList.add('hidden');
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

  popupHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoordinats = {
      x: evt.clientX,
      y: evt.clientY,
    };

    var dragged = false;

    function onMoouseMove(moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoordinats.x - moveEvt.clientX,
        y: startCoordinats.y - moveEvt.clientY,
      };

      startCoordinats = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
      setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
    }

    function onMouseUp(upEvt) {
      upEvt.preventDefault();

      if (dragged) {
        popupHandle.addEventListener('click', removeClick);
      }

      document.removeEventListener('mousemove', onMoouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMoouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onSuccess, window.utils.onError);
    evt.preventDefault();
  });

})();
