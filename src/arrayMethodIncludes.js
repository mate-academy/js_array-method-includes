'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, from = 0) {
    let fromIndex = from;
    let isIncludes = false;

    if (fromIndex >= this.length) {
      return false;
    }

    if (fromIndex <= (-1) * this.length) {
      fromIndex = 0;
    }

    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (isNaN(this[i]) && isNaN(valueToFind)) {
          return true;
        } else if (this[i] === valueToFind) {
          isIncludes = true;
        }
      }
    }

    if (fromIndex < 0) {
      fromIndex = this.length + fromIndex;

      for (let i = fromIndex; i < this.length; i++) {
        if (isNaN(this[i]) && isNaN(valueToFind)) {
          return true;
        } else if (this[i] === valueToFind) {
          isIncludes = true;
        }
      }
    }

    return isIncludes;
  };
}

module.exports = applyCustomIncludes;
