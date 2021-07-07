'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (!this.length) {
      return false;
    }

    let index;

    if (fromIndex < 0 && this.length < Math.abs(fromIndex)) {
      index = 0;
    } else if (fromIndex < 0) {
      index = fromIndex + this.length;
    } else {
      index = fromIndex;
    }

    for (let i = index; i < this.length; i++) {
      if ((Number.isNaN(valueToFind) && Number.isNaN(this[i]))
        || this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
