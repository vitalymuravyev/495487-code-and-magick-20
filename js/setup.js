'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SONAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;

var setupWindow = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var wizardsList = [];

setupWindow.classList.remove('hidden');

function renderValue(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function createWizard() {
  return {
    name: renderValue(NAMES) + ' ' + renderValue(SONAMES),
    coatColor: renderValue(COAT_COLORS),
    eyesColor: renderValue(EYES_COLORS),
  };

}

for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
  wizardsList[i] = createWizard();
}

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

for (i = 0; i < NUMBER_OF_WIZARDS; i++) {
  fragment.appendChild(renderWizard(wizardsList[i]));
}

similarWizardList.appendChild(fragment);

setupSimilar.classList.remove('hidden');
