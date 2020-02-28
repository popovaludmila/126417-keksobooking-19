'use strict';

(function () {
  var map = document.querySelector('.map');

  var similarMapElement = map.querySelector('.map__pins');
  var similarMapTemplate = document.querySelector('#card').content.querySelector('.map__card');

  var ads = [];
  for (var i = 0; i < 8; i++) {
    ads.push(window.card.generateAd);
  }

  var renderAd = function (ad) {
    var adItem = similarMapTemplate.cloneNode(true);

    adItem.querySelector('.popup__avatar').src = ad.window.card.author;
    adItem.querySelector('.popup__title').textContent = ad.window.card.title;
    adItem.querySelector('.popup__text--address').textContent = ad.window.card.address;
    adItem.querySelector('.popup__text--price').textContent = ad.window.card.price + '₽/ночь';
    adItem.querySelector('.popup__type').textContent = ad.window.card.type;
    adItem.querySelector('.popup__text--capacity').textContent = ad.window.card.rooms + ' ' + window.card.getPluralText(ad.window.card.rooms, 'комната', 'комнаты', 'комнат') + ' для ' + ad.window.card.guests + ' ' + window.card.getPluralText(ad.offer.guests, 'гостя', 'гостей', 'гостей');
    adItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + ad.window.card.checkin + ',' + ' выезд до ' + ad.window.card.checkout;
    adItem.querySelector('.popup__features').textContent = ad.window.card.features;
    adItem.querySelector('.popup__description').textContent = ad.window.card.description;
    adItem.querySelector('.popup__photos').src = ad.window.card.photos;

    return adItem;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < ads.length; i++) {
    fragment.appendChild(renderAd(ads[i]));
  }

  similarMapElement.appendChild(fragment);
})();
