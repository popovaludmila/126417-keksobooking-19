'use strict';

(function () {

  var AD_AVATARS = [
    'img/avatars/user01.png',
    'img/avatars/user02.png',
    'img/avatars/user03.png',
    'img/avatars/user04.png',
    'img/avatars/user05.png',
    'img/avatars/user06.png',
    'img/avatars/user07.png',
    'img/avatars/user08.png'
  ];

  var AD_TITLES = [
    'Белая резиденция',
    'Чёрная резиденция',
    'Красная резиденция',
    'Золотая резиденция',
    'Зелёная резиденция',
    'Фиолетовая резиденция',
    'Салатовая резиденция',
    'Жёлтая резиденция'
  ];

  var AD_TYPES = [
    'дворец',
    'квартира',
    'дом',
    'бунгало'
  ];

  var AD_ROOMS = [
    1,
    2,
    3,
    100
  ];

  var AD_TIMES = [
    '12:00',
    '13:00',
    '14:00'
  ];

  var AD_FEATURES = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'
  ];

  var AD_PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];

  var AD_DESCRIPTIONS = [
    'светлые комнаты',
    'огромные кровати',
    'есть все удобства',
    'тёмные стены',
    'неуютная мебель',
    'ванная-банная',
    'деньги на ветер',
    'второй срок'
  ];

  function generateLocation() {
    var width = document.querySelector('.map').offsetWidth;
    return {
      'x': getRandomInt(0, width) + MAP_PIN_WIDTH / 2,
      'y': getRandomInt(130, 630) + MAP_PIN_AFTER_HEIGHT
    };
  }

  function generateAd() {
    var location = generateLocation();

    return {
      'author': {
        'avatar': getRandomElementFromArrayWithRemove(AD_AVATARS)
      },
      'offer': {
        'title': getRandomElementFromArrayWithRemove(AD_TITLES),
        'address': location.x + ', ' + location.y,
        'price': getRandomInt(1000, 50000),
        'type': getRandomElementFromArray(AD_TYPES),
        'rooms': getRandomElementFromArray(AD_ROOMS),
        'guests': getRandomInt(0, 4),
        'checkin': getRandomElementFromArray(AD_TIMES),
        'checkout': getRandomElementFromArray(AD_TIMES),
        'features': getRandomSliceFromArray(AD_FEATURES),
        'description': getRandomElementFromArrayWithRemove(AD_DESCRIPTIONS),
        'photos': getRandomSliceFromArray(AD_PHOTOS)
      },
      'location': location
    };
  }
})();
