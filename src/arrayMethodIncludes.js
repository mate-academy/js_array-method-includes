'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    const sourseIndex = (fromIndex !== undefined) ? fromIndex : 0;

    if (valueToFind === undefined) {
      return false;
    }

    for (let i = sourseIndex; i < this.length - 1; i++) {
      if (this[i] === valueToFind || (isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
