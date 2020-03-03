'use strict';

(function () {
  var map = document.querySelector('.map');

  var similarMapElement = map.querySelector('.map__pins');
  var similarMapTemplate = document.querySelector('#card').content.querySelector('.map__card');

  var ads = [];
  for (var i = 0; i < 8; i++) {
    ads.push(window.card.generateAd());
  }

  var renderAd = function (ad) {
    var adItem = similarMapTemplate.cloneNode(true);

    adItem.querySelector('.popup__avatar').src = ad.author.avatar;
    adItem.querySelector('.popup__title').textContent = ad.offer.title;
    adItem.querySelector('.popup__text--address').textContent = ad.offer.address;
    adItem.querySelector('.popup__text--price').textContent = ad.offer.price + ' ₽/ночь';
    adItem.querySelector('.popup__type').textContent = ad.offer.type;
    adItem.querySelector('.popup__text--capacity').textContent = ad.offer.rooms + ' ' + window.card.getPluralText(ad.offer.rooms, 'комната', 'комнаты', 'комнат') + ' для ' + ad.offer.guests + ' ' + window.card.getPluralText(ad.offer.guests, 'гостя', 'гостей', 'гостей');
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
})();

