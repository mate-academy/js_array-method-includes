'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (isNaN(valueToFind) === isNaN(NaN) && valueToFind !== undefined) {
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
