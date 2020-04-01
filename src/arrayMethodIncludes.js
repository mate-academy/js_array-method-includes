'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    // write code here
    let withIndex = fromIndex;

    if (fromIndex < -1 || fromIndex === undefined) {
      withIndex = 0;
    } else if (fromIndex >= this.length || fromIndex === -1) {
      return false;
    }

    for (let i = withIndex; i < this.length; i++) {
      if (typeof this[i] === 'number'
        && isNaN(this[i])
        && typeof valueToFind === 'number'
        && isNaN(valueToFind)) {
        return true;
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
