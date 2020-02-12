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
  'каменные полы',
  'тёмные стены',
  'неуютная мебель',
  'ванная-банная',
  'деньги на ветер',
  'второй срок'
];

var map = document.querySelector('.map');
map.classList.remove('map--faded');

var similarMapElement = map.querySelector('#pin').content.querySelector('.map__pins');
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
  var arrClone = arr.slice()
  for (var i = 0; i <= getRandomInt(0, arr.length); i++) {
    result.push(getRandomElementFromArrayWithRemove(arrClone));
  }
  return result;
}

function generateLocation() {
  var width = document.querySelector('.map').offsetWidth;
  return {
    'x': getRandomInt(0, width),
    'y': getRandomInt(130, 630)
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
  }
}

var ads = [];
for (var i = 0; i < 8; i++) {
  ads.push(generateAd());
}

var renderAd = function (ad) {
  var adItem = similarMapTemplate.cloneNode(true);

  adItem.querySelector('.popup__avatar').style.img = ad.author.avatar;
  adItem.querySelector('.popup__title').style.textContent = ad.offer.title;
  adItem.querySelector('.popup__text--address').style.textContent = ad.offer.address;
  adItem.querySelector('.popup__text--price').style.textContent = ad.offer.price;
  adItem.querySelector('.popup__type').style.textContent = ad.offer.type;
  adItem.querySelector('.popup__text--capacity').style.textContent = ad.offer.rooms + ' комнаты для' + ad.offer.guests + ' гостей';
  adItem.querySelector('.popup__text--time').style.textContent = 'Заезд после ' + ad.offer.checkin + ',' + ' выезд до ' + ad.offer.checkout;
  adItem.querySelector('.popup__features').style.textContent = ad.offer.features;
  adItem.querySelector('.popup__description').style.textContent = ad.offer.description;
  adItem.querySelector('.popup__ptotos').style.img = ad.offer.photos;

  return adItem;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < ads.length; i++) {
  fragment.appendChild(renderAd(ad[i]));
}

similarMapElement.style.left = location.x + 32;
similarMapElement.style.top = location.y + (65 + 22);
similarMapElement.src = ad.avatar;
similarMapElement.alt = ad.title;
similarMapElement.appendChild(fragment);
