'use strict';

var AD_AVATARS = [
  "img/avatars/user01.png",
  "img/avatars/user02.png",
  "img/avatars/user03.png",
  "img/avatars/user04.png",
  "img/avatars/user05.png",
  "img/avatars/user06.png",
  "img/avatars/user07.png",
  "img/avatars/user08.png"
];
var AD_TITLES = [
  "Белая резиденция",
  "Чёрная резиденция",
  "Красная резеденция",
  "Золотая резиденция",
  "Зелёная резиденция",
  "Фиолетовая резеденция",
  "Салатовая резеденция",
  "Жёлтая резеденция"
];
var AD_TYPES = [
  "palace",
  "flat",
  "house",
  "bungalo"
];
var AD_ROOMS = [
  1,
  2,
  3,
  100
];
var AD_TIMES = [
  "12:00",
  "13:00",
  "14:00"
];
var AD_FEATURES = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner"
];
var AD_PHOTOS = [
  "http://o0.github.io/assets/images/tokyo/hotel1.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
  "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
];
var AD_DESCRIPTIONS = [
  "светлые комнаты",
  "огромные кровати",
  "яркие воспоминания",
  "тёмные стены",
  "не уютная мебель",
  "ванная-банная",
  "деньги на ветер",
  "второй срок"
];


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
  var width = document.querySelector(".map").offsetWidth;
  return {
    'x': getRandomInt(0, width),
    'y': getRandomInt(130, 630)
  };
}

function generateAd() {
  var location = generateLocation();

  return {
    "author": {
      "avatar": getRandomElementFromArrayWithRemove(AD_AVATARS)
    },
    "offer": {
      "title": getRandomElementFromArrayWithRemove(AD_TITLES),
      "address": location.x + ", " + location.y,
      "price": getRandomInt(1000, 50000),
      "type": getRandomElementFromArray(AD_TYPES),
      "rooms": getRandomElementFromArray(AD_ROOMS),
      "guests": getRandomInt(0, 4),
      "checkin": getRandomElementFromArray(AD_TIMES),
      "checkout": getRandomElementFromArray(AD_TIMES),
      "features": getRandomSliceFromArray(AD_FEATURES),
      "description": getRandomElementFromArrayWithRemove(AD_DESCRIPTIONS),
      "photos": getRandomSliceFromArray(AD_PHOTOS)
    },
    "location": location
  }
}

function generateAds() {
  var result = [];
  for (var i = 0; i < 8; i++) {
    result.push(generateAd());
  }
  return result;
}












