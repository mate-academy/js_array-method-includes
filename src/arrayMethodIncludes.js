'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const arrayLength = this.length;
    if (arrayLength === 0) return false;
    if (fromIndex >= this.length) return false;
    if (valueToFind === undefined) return false;

    for (let i = fromIndex; i < this.length; i++) {
      if (isNaN(valueToFind) && (isNaN(valueToFind) === isNaN(this[i]))) {
        return true;
      }
      if (valueToFind === this[i]) return true;
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
