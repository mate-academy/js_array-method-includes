'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let currentIndex = fromIndex || 0;
    let isFound = false;

    while (!isFound && currentIndex < this.length) {
      if (Number.isNaN(this[currentIndex])
          && Number.isNaN(valueToFind)) {
        isFound = true;
      } else if ((this[currentIndex] === valueToFind)) {
        isFound = true;
      }
      currentIndex++;
    }

    return isFound;
  };
}

module.exports = applyCustomIncludes;
