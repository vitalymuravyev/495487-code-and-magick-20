'use strict';

(function () {
  var URL_SAVE = 'https://javascript.pages.academy/code-and-magick/';
  var URL_LOAD = 'https://javascript.pages.academy/code-and-magick/data';
  var StatusCode = {
    OK: 200
  };

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.open('GET', URL_LOAD);

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Произошла ошибка: ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Похоже нет поединения!');
      });

      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Произошла ошибка: ' + xhr.statusText);
        }
      });

      xhr.open('POST', URL_SAVE);

      xhr.addEventListener('error', function () {
        onError('Сорри, произошла ошибка при отправке данных');
      });
      xhr.send(data);
    },

  };

})();
