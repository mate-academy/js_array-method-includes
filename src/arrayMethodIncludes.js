'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    for (let i = fromIndex; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }

      if (valueToFind === this[i]) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
