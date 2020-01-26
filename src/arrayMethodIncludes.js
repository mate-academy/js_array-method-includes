'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (this.length === 0) {
      return false;
    }

    const index = fromIndex < 0 && this.length < Math.abs(fromIndex) ? 0
      : fromIndex < 0 ? fromIndex + this.length
        : fromIndex;

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
