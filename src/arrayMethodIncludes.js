'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    const arr = this;

    if (fromIndex < 0) {
      if (fromIndex * (-1) > arr.length) {
        return false;
      }
    }

    for (let i = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
      i < arr.length; i++) {
      if (arr[i] === valueToFind || (isNaN(arr[i]) && isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
