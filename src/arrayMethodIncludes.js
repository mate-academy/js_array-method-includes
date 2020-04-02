'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const arr = this;
    let newIndex = fromIndex;

    if (newIndex < 0) {
      newIndex = newIndex + arr.length;
    }

    if (newIndex < 0) {
      newIndex = 0;
    }

    for (let i = newIndex; i < arr.length; i++) {
      if (Object.is(arr[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
