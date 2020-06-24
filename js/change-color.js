'use strict';

(function () {
  window.changeColor = function (item, itemInput, colors) {
    var newColor = window.utils.renderValue(colors);
    itemInput.value = newColor;
    if (item.classList.contains('setup-fireball-wrap')) {
      item.style.background = newColor;
    } else {
      item.style.fill = newColor;
    }
  };
})();
