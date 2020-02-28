'use strict';

(function () {
  function generateLocation() {
    var width = document.querySelector('.map').offsetWidth;
    return {
      'x': window.random.getRandomInt(0, width) + window.pin.MAP_PIN_WIDTH / 2,
      'y': window.random.getRandomInt(130, 630) + window.pin.MAP_PIN_AFTER_HEIGHT
    };
  }

  function generateAd() {
    var location = generateLocation();

    return {
      'author': {
        'avatar': window.random.getRandomElementFromArrayWithRemove(window.data.AD_AVATARS)
      },
      'offer': {
        'title': window.random.getRandomElementFromArrayWithRemove(window.data.AD_TITLES),
        'address': location.x + ', ' + location.y,
        'price': window.random.getRandomInt(1000, 50000),
        'type': window.random.getRandomElementFromArray(window.data.AD_TYPES),
        'rooms': window.random.getRandomElementFromArray(window.data.AD_ROOMS),
        'guests': window.random.getRandomInt(0, 4),
        'checkin': window.random.getRandomElementFromArray(window.data.AD_TIMES),
        'checkout': window.random.getRandomElementFromArray(window.data.AD_TIMES),
        'features': window.random.getRandomSliceFromArray(window.data.AD_FEATURES),
        'description': window.random.getRandomElementFromArrayWithRemove(window.data.AD_DESCRIPTIONS),
        'photos': window.random.getRandomSliceFromArray(window.data.AD_PHOTOS)
      },
      'location': location
    };
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

  window.card = {
    autor: author.avatar,
    title: offer.title,
    address: offer.address,
    price: offer.price,
    type: offer.type,
    rooms: offer.rooms,
    guests: offer.guests,
    checkin: offer.checkin,
    checkout: offer.checkout,
    features: offer.features,
    description: offer.description,
    photos: offer.photos,
    location: location,
    ads: ads,
    getPluralText: getPluralText,
    generateAd: generateAd
  }

})();
