'use strict';

/**
 * Implement method includes
 */

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    const indexFromSearch = (fromIndex !== undefined) ? fromIndex : 0;

    if (valueToFind === undefined) {
      return false;
    }

    for (let i = indexFromSearch; i < this.length - 1; i++) {
      if (this[i] === valueToFind || (isNaN(valueToFind) && isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
