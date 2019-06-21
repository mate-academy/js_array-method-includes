'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchIndex = fromIndex;

    if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }

    if (valueToFind === undefined) {
      return false;
    }

    for (let i = 0; i < this.length; i++) {
      if (valueToFind === this[i] && i >= searchIndex) {
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
