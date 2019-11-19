'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (valueToFind === this[i]) {
        return true;
      } else if (isNaN(valueToFind) && isNaN(valueToFind) === isNaN(this[i])) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
