'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const curIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex;

    if (Math.abs(curIndex) > this.length) {
      return false;
    }

    for (let i = curIndex; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(this[i]) && isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
