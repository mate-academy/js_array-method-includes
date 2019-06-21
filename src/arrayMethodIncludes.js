'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    // write code here
    const length = this.length;
    let startIndex = fromIndex;
    if (fromIndex < 0) {
      startIndex = fromIndex + length;
      if (fromIndex < 0) {
        startIndex = 0;
      }
    } else if (fromIndex === undefined) {
      startIndex = 0;
    }
    for (let i = startIndex; i < length; i++) {
      if (valueToFind === this[i]) {
        return true;
      } else if (valueToFind === undefined) {
        return false;
      } else if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
    };
    return false;
  };
}

module.exports = applyCustomIncludes;
