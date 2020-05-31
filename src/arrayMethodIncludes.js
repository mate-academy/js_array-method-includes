'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchStartIndex = fromIndex;

    if (searchStartIndex >= this.length) {
      return false;
    }

    if (searchStartIndex < 0) {
      searchStartIndex = searchStartIndex + this.length;
    }

    if (searchStartIndex < 0) {
      searchStartIndex = 0;
    }

    for (let i = searchStartIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
