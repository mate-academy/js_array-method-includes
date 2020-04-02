'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex;
    const countedIndex = this.length + startIndex;

    if (startIndex >= this.length) {
      return false;
    } else if ((startIndex < 0) && (countedIndex > 0)) {
      startIndex = countedIndex;
    } else if (countedIndex < 0) {
      startIndex = 0;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === valueToFind || String(this[i]) === 'NaN') {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
