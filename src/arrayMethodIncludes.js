'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let start = fromIndex;

    if (fromIndex < 0) {
      start = this.length + fromIndex;
    }

    if (start < 0) {
      start = 0;
    }

    for (let i = start; i < this.length; i += 1) {
      if (this[i] === valueToFind || (isNaN(valueToFind) && isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
