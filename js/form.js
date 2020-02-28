'use strict';

(function () {

  var ENTER_KEY = 'Enter';

  var mapPinMain = document.querySelector('.map__pin--main');
  var fieldsetAll = document.querySelectorAll('fieldset');
  var selectAll = document.querySelectorAll('select');

  var address = document.querySelector('#address');

  var locationMapPin = window.card.location;

  var leftCoordMapPin = window.pin.MAP_PIN_LEFT + window.pin.MAP_PIN_WIDTH / 2;
  var topCoordMapPin = window.pin.MAP_PIN_TOP + window.pin.MAP_PIN_HEIGHT / 2;
  address.value = leftCoordMapPin + ', ' + topCoordMapPin;

  var cancelInactiveMode = function () {
    for (var i = 0; i < fieldsetAll.length; i++) {
      fieldsetAll[i].removeAttribute('disabled');
    }

    for (var i = 0; i < selectAll.length; i++) {
      selectAll[i].removeAttribute('disabled');
    }
  };

  var onMousePress = function (evt) {
    if (evt.which === 1) {
      cancelInactiveMode();
    }
  };

  var onMapPinSet = function () {
    address.value = locationMapPin;
  };

  mapPinMain.addEventListener('mousedown', onMousePress);
  mapPinMain.addEventListener('mousemove', onMapPinSet);

  mapPinMain.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      cancelInactiveMode();
    }
  });
})();
