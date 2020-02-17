'use strict';

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

var ENTER_KEY = 'Enter';
var MAP_PIN_LEFT = 570;
var MAP_PIN_TOP = 375;
var MAP_PIN_WIDTH = 40;
var MAP_PIN_HEIGHT = 44;
var MAP_PIN_AFTER_HEIGHT = 22;

var map = document.querySelector('.map');

var similarMapElement = map.querySelector('.map__pins');
var similarMapTemplate = document.querySelector('#card').content.querySelector('.map__card');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomElementFromArray(arr) {
  return arr[getRandomInt(0, arr.length)];
}

function getRandomElementFromArrayWithRemove(arr) {
  return arr.splice(getRandomInt(0, arr.length), 1)[0];
}

function getRandomSliceFromArray(arr) {
  var result = [];
  var arrClone = arr.slice();
  for (var i = 0; i <= getRandomInt(0, arr.length); i++) {
    result.push(getRandomElementFromArrayWithRemove(arrClone));
  }
  return result;
}

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

var ads = [];
for (var i = 0; i < 8; i++) {
  ads.push(generateAd());
}

var getPluralText = function (num, one, two, many) {
  num = num % 100;

  if (num >= 5 && num <= 20) {
    return many;
  }

  num = num % 10;
  if (num === 1) {
    return one;
  }
  if (num > 1 && num < 5) {
    return two;
  }
  return many;
};

var renderAd = function (ad) {
  var adItem = similarMapTemplate.cloneNode(true);

  adItem.querySelector('.popup__avatar').src = ad.author.avatar;
  adItem.querySelector('.popup__title').textContent = ad.offer.title;
  adItem.querySelector('.popup__text--address').textContent = ad.offer.address;
  adItem.querySelector('.popup__text--price').textContent = ad.offer.price + '₽/ночь';
  adItem.querySelector('.popup__type').textContent = ad.offer.type;
  adItem.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' ' + getPluralText(ad.offer.rooms, 'комната', 'комнаты', 'комнат') + ' для ' + ad.offer.guests + ' ' + getPluralText(ad.offer.guests, 'гостя', 'гостей', 'гостей');
  adItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.offer.checkin + ',' + ' выезд до ' + ad.offer.checkout;
  adItem.querySelector('.popup__features').textContent = ad.offer.features;
  adItem.querySelector('.popup__description').textContent = ad.offer.description;
  adItem.querySelector('.popup__photos').src = ad.offer.photos;

  return adItem;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < ads.length; i++) {
  fragment.appendChild(renderAd(ads[i]));
}

similarMapElement.appendChild(fragment);

var mapPinMain = map.querySelector('.map__pin--main');
var fieldsetAll = document.querySelectorAll('fieldset');
var selectAll = document.querySelectorAll('select');

var address = document.querySelector('#address');

var locationMapPin = generateLocation();

var leftCoordMapPin = MAP_PIN_LEFT + MAP_PIN_WIDTH / 2;
var topCoordMapPin = MAP_PIN_TOP + MAP_PIN_HEIGHT / 2;
address.value = leftCoordMapPin + ', ' + topCoordMapPin;

var cancelInactiveMode = function () {
  for (i = 0; i < fieldsetAll.length; i++) {
    fieldsetAll[i].removeAttribute('disabled');
  }

  for (i = 0; i < selectAll.length; i++) {
    selectAll[i].removeAttribute('disabled');
  }
};

var onMousePress = function (evt) {
  if (evt.which === 1) {
    cancelInactiveMode();
  }
};

var onMapPinSet = function () {
  address.value = locationMapPin.x + ', ' + locationMapPin.y;
};

mapPinMain.addEventListener('mousedown', onMousePress);
mapPinMain.addEventListener('mousemove', onMapPinSet);

mapPinMain.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    cancelInactiveMode();
  }
});
