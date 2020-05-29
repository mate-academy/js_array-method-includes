'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let reassignedIndex = fromIndex;

    if (fromIndex < 0) {
      (Math.abs(fromIndex) > this.length)
        ? reassignedIndex = 0
        : reassignedIndex = this.length + fromIndex;
    } else if (fromIndex > this.length - 1) {
      return false;
    }

    for (let i = reassignedIndex; i < this.length; i++) {
      if (!Number.isNaN(valueToFind)) {
        if (this[i] === valueToFind) {
          return true;
        }
      } else {
        if (Number.isNaN(this[i])) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
