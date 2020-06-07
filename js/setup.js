'use strict';

var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SONAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_OF_WIZARDS = 4;

var setupWindow = document.querySelector('.setup');
setupWindow.classList.remove('hidden');

function rndNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function renderValue(arr) {
  return arr[rndNum(0, arr.length)];
}

function createWizard() {
  return {
    name: renderValue(NAMES) + ' ' + renderValue(SONAMES),
    coatColor: renderValue(COAT_COLORS),
    eyesColor: renderValue(EYES_COLORS),
  };

}
var wizardsList = [];
for (var i = 0; i < NUMBER_OF_WIZARDS; i++) {
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

for (var j = 0; j < NUMBER_OF_WIZARDS; j++) {
  fragment.appendChild(renderWizard(wizardsList[j]));
}
var similarWizardList = document.querySelector('.setup-similar-list');
similarWizardList.appendChild(fragment);

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
