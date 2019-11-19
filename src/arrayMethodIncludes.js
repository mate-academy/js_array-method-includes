'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }
    if (fromIndex < 0) {
      return false;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (isNaN(this[i]) && (isNaN(valueToFind))) {
        return true;
      }
      if (this[i] === valueToFind) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
