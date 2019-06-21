'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    if (valueToFind === undefined) {
      return false;
    }

    let startIndex = fromIndex;
    if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    };

    for (let i = startIndex; i < this.length; i++) {
      if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
