'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (valueToFind === undefined || this.length === 0) {
      return false;
    }

    let i;
    fromIndex === undefined ? i = 0 : i = fromIndex;

    for (i; i < this.length; i++) {
      if ((isNaN(valueToFind) && isNaN(this[i])) || (valueToFind === this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
