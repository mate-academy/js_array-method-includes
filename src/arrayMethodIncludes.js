'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (Object.is(this[i], valueToFind)) {
          return true;
        }
      }
    } else {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (Object.is(this[i], valueToFind)) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
