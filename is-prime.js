(function (exports) {
  'use strict';
  
  exports.isPrime = function (number) {
    if (number === 1) {
      return false;

    } else if (number < 4) {
      /**
       * 2 and 3 are prime
       */
      return true;

    } else if (number % 2 === 0) {
      return false;

    } else if (number < 9) {
      /**
       * We have already excluded 4,6 and 8
       */
      return true;

    } else if (number % 3 === 0) {
      return false;

    } else {
      var rounded = Math.floor(Math.sqrt(number));
      var factor = 5;
      while (factor <= rounded) {
        if (number % factor === 0) {
          return false;
        }
        if (number % (factor + 2) === 0) {
          return false;
        }
        factor += 6;
      }
    }
    
    return true;
  };
}(typeof exports === 'undefined' ? window : exports));
