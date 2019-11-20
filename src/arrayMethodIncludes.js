'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (this.length === 0 || arguments.length === 0) {
      return false;
    }

    if (fromIndex >= this.length) {
      return false;
    }

    let start;

    if (fromIndex < 0) {
      start = this.length - 1 + fromIndex;
    } else {
      start = fromIndex;
    }

    if (start < 0) {
      return false;
    }

    for (let i = start; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
