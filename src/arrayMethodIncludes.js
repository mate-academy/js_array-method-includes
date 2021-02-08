'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind = 0, fromIndex = 0) {
    let calcIndex = fromIndex;
    if (calcIndex < 0) {
      calcIndex = Math.max(this.length + calcIndex, 0);
    }
    for (let i = calcIndex; i < this.length; i++) {
      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
      if (valueToFind === this[i]) {
        return true;
      }
    }
    return false;
    // write code here
  };
}

module.exports = applyCustomIncludes;
