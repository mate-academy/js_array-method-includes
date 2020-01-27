'use strict';

/**
 * Implement method includes
 */

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    if (Math.abs(index) > this.length) {
      return false;
    }

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    for (let i = index; i < this.length; i += 1) {
      if (valueToFind === this[i]) {
        return true;
      } else if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
