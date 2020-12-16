'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    let index = fromIndex;

    if (index < 0) {
      index += this.length;
    }

    if (index >= 0) {
      for (let i = index; i < this.length; i++) {
        if (this[i] === valueToFind
          || (isNaN(valueToFind) && isNaN(this[i]))) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
