'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex < 0
      ? this.length + fromIndex
      : fromIndex;

    for (startIndex; startIndex < this.length; startIndex++) {
      if (valueToFind === this[startIndex]
        || (Number.isNaN(valueToFind) && Number.isNaN(this[startIndex]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
