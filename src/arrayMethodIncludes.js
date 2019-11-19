'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (valueToFind === this[i]
          || (Number.isNaN(valueToFind)
            && Number.isNaN(valueToFind) === Number.isNaN(this[i]))) {
          return true;
        }
      }

      return false;
    } else {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (valueToFind === this[i]
          || (Number.isNaN(valueToFind)
            && Number.isNaN(valueToFind) === Number.isNaN(this[i]))) {
          return true;
        }
      }

      return false;
    }
  };
}

module.exports = applyCustomIncludes;
