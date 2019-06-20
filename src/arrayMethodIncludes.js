'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    const startIter = fromIndex < 0 ? this.length - fromIndex : fromIndex;
    for (let i = startIter; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }
    return isNaN(valueToFind) && valueToFind !== undefined;
  };
}

module.exports = applyCustomIncludes;
