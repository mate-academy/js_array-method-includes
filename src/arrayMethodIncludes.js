'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {

    if (fromIndex < 0) {
      fromIndex += this.length;
    }

    if (fromIndex < 0) {
      return false;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }

      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
