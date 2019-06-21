'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const value = valueToFind;

    for (let i = fromIndex; i < this.length; i++) {
      if (valueToFind === this[i]
        || valueToFind !== value
        || valueToFind === '') {
        return true;
      }
      return false;
    }
  };
}

module.exports = applyCustomIncludes;
