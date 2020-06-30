'use strict';

(function () {
  window.utils = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL_COLORS: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
    NUMBER_OF_WIZARDS: 4,

    rndNum: function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },

    renderValue: function (arr) {
      return arr[window.utils.rndNum(0, arr.length)];
    },

    onError: function (errorMessage) {
      var errorWindow = document.createElement('div');
      errorWindow.style.position = 'absolute';
      errorWindow.style.top = 100;
      errorWindow.style.left = 100;

      errorWindow.style = 'z-index: 100; text-align: center; background-color: brown';

      errorWindow.style.fontSize = '20px';

      errorWindow.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', errorWindow);
    },
  };
})();
