'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let index = fromIndex || 0;
    const value = valueToFind || undefined;

    if (-fromIndex > this.length) {
      return false;
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
