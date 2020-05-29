'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex < 0
      ? (this.length + fromIndex) : fromIndex;

    if (fromIndex < -this.length) {
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
