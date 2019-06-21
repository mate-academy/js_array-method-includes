'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }

    const startIndex = fromIndex < 0 ? this.length - 1 + fromIndex : fromIndex;
    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === valueToFind || this[i] === undefined) {
        return true;
      }

      if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
