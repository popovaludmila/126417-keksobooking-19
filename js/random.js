'use strict';

(function () {
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

  window.random = {
    getRandomInt: getRandomInt,
    getRandomElementFromArray: getRandomElementFromArray,
    getRandomElementFromArrayWithRemove: getRandomElementFromArrayWithRemove,
    getRandomSliceFromArray: getRandomSliceFromArray
  }
})();
