'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (!this.length) {
      return undefined;
    }

    let indexFrom = fromIndex;

    if (fromIndex < 0) {
      indexFrom = this.length - Math.abs(indexFrom);

      if (indexFrom < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i < this.length; i++) {
      if (this[i] === valueToFind
        || (Number.isNaN(valueToFind) && Number.isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
