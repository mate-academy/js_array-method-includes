'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index;
    const value = valueToFind || undefined;

    if (-fromIndex > this.length) {
      return false;
    }

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    } else {
      index = fromIndex;
    }

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    for (index; index < this.length; index++) {
      if (this[index] === value) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
