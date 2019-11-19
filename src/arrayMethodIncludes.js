'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (valueToFind === undefined) {
      return false;
    }

    if (fromIndex === undefined) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === valueToFind
          || (isNaN(this[i]) && isNaN(valueToFind))) {
          return true;
        }
      }
    } else {
      for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === valueToFind
          || (isNaN(this[i]) && isNaN(valueToFind))) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
