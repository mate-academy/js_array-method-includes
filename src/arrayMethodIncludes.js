'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    const thisArrLength = this.length;
    let start = 0;

    if (arguments.length === 0) {
      return false;
    }

    if (fromIndex && typeof fromIndex === 'number') {
      if (fromIndex >= 0) {
        start = fromIndex;
      } else {
        start = thisArrLength + fromIndex;
      }

      if (start > thisArrLength) {
        return false;
      }

      if (start < 0) {
        start = 0;
      }
    }

    for (let i = start; i < thisArrLength; i++) {
      if (String(valueToFind) === 'NaN') {
        if (String(this[i]) === 'NaN') {
          return true;
        };
      };

      if (this[i] === valueToFind) {
        return true;
      };
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
