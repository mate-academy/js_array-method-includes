'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    while (index < this.length) {
      if (valueToFind === this[index]) {
        return true;
      } else if (Number.isNaN(this[index]) && Number.isNaN(valueToFind)) {
        return true;
      }

      index++;
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
