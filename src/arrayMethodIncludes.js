'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const value = valueToFind;
    if (fromIndex < 0) {
      for (let i = this.length + fromIndex; i >= 0; i--) {
        if (valueToFind === this[i]
          || valueToFind !== value
          || valueToFind === '') {
          return true;
        }
      }
    } else {
      for (let i = fromIndex; i < this.length; i++) {
        if (valueToFind === this[i]
          || valueToFind !== value
          || valueToFind === '') {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
