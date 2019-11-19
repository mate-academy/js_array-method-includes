'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
          return true;
        } else if (this[i] === valueToFind) {
          return true;
        }
      }

      return false;
    }
  };
}

module.exports = applyCustomIncludes;
