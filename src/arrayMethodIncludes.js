'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const value = valueToFind;
    let valueRules = false;
    let index = fromIndex;

    if (valueToFind !== value || valueToFind === '') {
      valueRules = true;
    }

    if (fromIndex < 0) {
      index = this.length + fromIndex;
      for (let i = index; i >= 0; i--) {
        if (valueToFind === this[i] || valueRules) {
          return true;
        }
      }
    } else {
      for (let i = index; i < this.length; i++) {
        if (valueToFind === this[i] || valueRules) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
