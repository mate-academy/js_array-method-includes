'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const from = fromIndex < 0 ? (this.length + fromIndex) > 0
      ? (this.length + fromIndex)
      : 0
      : fromIndex;

    for (let i = from; i < this.length; i++) {
      if (this[i] === valueToFind
        || (Number.isNaN(valueToFind) && Number.isNaN(this[i]))) {
        return true;
      }

      if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
