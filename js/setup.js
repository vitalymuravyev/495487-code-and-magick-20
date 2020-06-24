'use strict';
(function () {
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SONAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  function createWizard() {
    return {
      name: window.utils.renderValue(NAMES) + ' ' + window.utils.renderValue(SONAMES),
      coatColor: window.utils.renderValue(window.utils.COAT_COLORS),
      eyesColor: window.utils.renderValue(window.utils.EYES_COLORS),
    };

  }
  var wizardsList = [];
  for (var i = 0; i < window.utils.NUMBER_OF_WIZARDS; i++) {
    wizardsList.push(createWizard());
  }
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  }
  var fragment = document.createDocumentFragment();

  for (var j = 0; j < window.utils.NUMBER_OF_WIZARDS; j++) {
    fragment.appendChild(renderWizard(wizardsList[j]));
  }
  var similarWizardList = document.querySelector('.setup-similar-list');
  similarWizardList.appendChild(fragment);

  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
})();
