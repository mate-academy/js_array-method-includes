'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const position = fromIndex === undefined ? 0 : fromIndex;
    if (position >= this.length || valueToFind === undefined) {
      return false;
    }
    if (position < 0) {
      for (let i = this.length + position; i < this.length; i++) {
        if (this[i] === valueToFind) {
          return true;
        }
      }
    } else {
      for (let i = position; i < this.length; i++) {
        if (this[i] === valueToFind || (isNaN(this[i]) && isNaN(valueToFind))) {
          return true;
        }
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
