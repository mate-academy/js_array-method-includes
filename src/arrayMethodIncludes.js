'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchFrom = fromIndex;

    if (searchFrom < 0) {
      searchFrom = (this.length - 1) + searchFrom;
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === valueToFind || Number.isNaN(this[i]))
        && i > searchFrom) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
