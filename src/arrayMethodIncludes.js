'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const fromIndexIncludes = (fromIndex >= 0) ? fromIndex
      : fromIndex + this.length;
    for (let index = fromIndexIncludes; index < this.length; index++) {
      if (this[index] === valueToFind
        || (Number.isNaN(this[index]) && Number.isNaN(valueToFind))) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
