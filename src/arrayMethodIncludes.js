'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex < 0) {
      for (let i = fromIndex; i < 0; i++) {
        if (Object.is(this[i], valueToFind)) {
          return true;
        }
      }
      return false;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
