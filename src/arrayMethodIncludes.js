'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let i = fromIndex;

    if (fromIndex >= this.length) {
      return false;
    }

    if (i < 0) {
      i = this.length + fromIndex;
    }

    if (i < 0) {
      i = 0;
    }

    for (; i < this.length; i++) {
      if (
        (this[i] === valueToFind) || (isNaN(valueToFind) && isNaN(this[i]))
      ) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
