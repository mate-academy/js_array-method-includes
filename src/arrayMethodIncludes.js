'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    // write code here
    for (let i = fromIndex; i < this.length; i++) {
      if (valueToFind === this[i]) {
        return;
      }
    }
  };
}

module.exports = applyCustomIncludes;
