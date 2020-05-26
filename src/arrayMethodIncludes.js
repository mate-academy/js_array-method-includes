'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const newFromIndex = fromIndex >= 0 ? fromIndex : fromIndex + this.length;

    if (this.length + newFromIndex < 0) {
      return false;
    }
    // check for big negative fromIndex

    for (let i = newFromIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
