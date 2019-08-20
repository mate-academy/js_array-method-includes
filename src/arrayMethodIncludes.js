'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    if (valueToFind === undefined) {
      return false;
    }

    while (index < this.length) {
      if (valueToFind === this[index]) {
        return true;
      } else if (isNaN(this[index]) && isNaN(valueToFind)) {
        return true;
      }

      index++;
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
