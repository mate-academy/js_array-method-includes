'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex < 0) {
      for (let i = this.length - fromIndex; i < this.length; i++) {
        return true;
      }
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(valueToFind) && isNaN(this[i]))) {
        return true;
      } else if (valueToFind === undefined || fromIndex < 0) {
        return false;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
