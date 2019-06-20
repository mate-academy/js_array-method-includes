'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind = 0, fromIndex = 0) {
    let result = false;
    for (let i = fromIndex; i < this.length; i++) {
      if (isNaN(valueToFind) && isNaN(this[i])) {
        result = true;
        return result;
      }
      if (valueToFind === this[i]) {
        result = true;
        return result;
      }
    }
    return result;
    // write code here
  };
}

module.exports = applyCustomIncludes;
