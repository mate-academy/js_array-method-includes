'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let curIndex = fromIndex >= 0 ? fromIndex : this.length + fromIndex;

    if (Math.abs(curIndex) > this.length) {
      return false;
    }

    for (curIndex; curIndex < this.length; curIndex++) {
      if (this[curIndex] === valueToFind
        || (Number.isNaN(this[curIndex]) && Number.isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
