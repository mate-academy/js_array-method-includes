'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const changedFromIndex = fromIndex >= 0 ? fromIndex
      : fromIndex + this.length;

    if (this.length + changedFromIndex < 0) {
      return false;
    }
    // check for big negative fromIndex

    for (let i = changedFromIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
