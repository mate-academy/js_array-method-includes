'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const start = fromIndex < 0 ? fromIndex + this.length : fromIndex;

    for (let i = start; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
      if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
