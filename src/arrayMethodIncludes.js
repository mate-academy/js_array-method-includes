'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }

    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === valueToFind
          || (isNaN(valueToFind)
            && isNaN(valueToFind) === isNaN(this[i]))) {
          return true;
        }
      }
    } else {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (this[i] === valueToFind
          || (isNaN(valueToFind)
            && isNaN(valueToFind) === isNaN(this[i]))) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
