'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return false;
    }

    let searchFrom = fromIndex;

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    }

    if (searchFrom < 0) {
      searchFrom = 0;
    }

    for (let i = searchFrom; i < this.length; i++) {
      if (valueToFind === this[i]
        || (Number.isNaN(valueToFind) && Number.isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
