'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (this.length === 0) {
      return;
    }

    if (-1 * fromIndex > this.length) {
      return false;
    }

    const indexStart = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (let i = indexStart; i < this.length; i++) {
      if (JSON.stringify(valueToFind) === JSON.stringify(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
