'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    // write code here
    let withIndex = fromIndex;

    if (fromIndex >= this.length) {
      return false;
    }

    if (fromIndex === undefined
      || fromIndex === null
      || Number.isNaN(fromIndex)
      || (valueToFind === undefined && withIndex < 0)) {
      withIndex = 0;
    } else if (fromIndex < 0) {
      withIndex = fromIndex + this.length;
    }

    for (let i = withIndex; i < this.length; i++) {
      if (Number.isNaN(this[i])
        && Number.isNaN(valueToFind)) {
        return true;
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
