'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (valueToFind === undefined || this.length < 1) {
      return false;
    }

    for (let i = fromIndex || 0; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      } else if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
