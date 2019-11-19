'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (valueToFind === undefined) {
      return false;
    }

    if (isFinite(fromIndex)) {
      for (let i = fromIndex; i < this.length; i++) {
        if ((!isNaN(this[i]) && this[i] === valueToFind)
          || (isNaN(this[i]) && isNaN(valueToFind))) {
          return true;
        }
      }
    } else {
      for (const value of this) {
        if ((!isNaN(value) && value === valueToFind)
          || (isNaN(value) && isNaN(valueToFind))) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
