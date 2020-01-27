'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex;
    const toFind = valueToFind || undefined;

    if (fromIndex >= this.length || fromIndex <= -this.length) {
      return false;
    }

    if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === toFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
