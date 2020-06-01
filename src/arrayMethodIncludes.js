'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let isPresent = false;
    let startingIndex = 0;

    if (fromIndex > this.length) {
      isPresent = false;
    } else if (fromIndex < 0 && Math.abs(fromIndex) > this.length) {
      startingIndex = 0;
    } else if (fromIndex < 0 && Math.abs(fromIndex) < this.length) {
      startingIndex = this.length - Math.abs(fromIndex);
    } else {
      startingIndex = fromIndex;
    }

    for (let i = startingIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        isPresent = true;
        break;
      }
    }

    return isPresent;
  };
}

module.exports = applyCustomIncludes;
