'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    if (valueToFind === undefined) {
      return false;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
      if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
