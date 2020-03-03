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

    adItem.querySelector('.popup__avatar').src = window.card.author;
    adItem.querySelector('.popup__title').textContent = window.card.title;
    adItem.querySelector('.popup__text--address').textContent = window.card.address;
    adItem.querySelector('.popup__text--price').textContent = window.card.price + '₽/ночь';
    adItem.querySelector('.popup__type').textContent = window.card.type;
    adItem.querySelector('.popup__text--capacity').textContent = window.card.rooms + ' ' + window.card.getPluralText(window.card.rooms, 'комната', 'комнаты', 'комнат') + ' для ' + window.card.guests + ' ' + window.card.getPluralText(window.card.guests, 'гостя', 'гостей', 'гостей');
    adItem.querySelector('.popup__text--time').textContent = 'Заезд после ' + window.card.checkin + ',' + ' выезд до ' + window.card.checkout;
    adItem.querySelector('.popup__features').textContent = window.card.features;
    adItem.querySelector('.popup__description').textContent = window.card.description;
    adItem.querySelector('.popup__photos').src = window.card.photos;

    return adItem;
    console.log(adItem);
  };

  var fragment = document.createDocumentFragment();
  for (i = 0; i < ads.length; i++) {
    fragment.appendChild(renderAd(ads[i]));
  }

  similarMapElement.appendChild(fragment);
})();

