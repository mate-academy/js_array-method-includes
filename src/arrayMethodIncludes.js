'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let firstIndex = fromIndex;

    if (firstIndex < 0) {
      firstIndex = firstIndex + this.length;
    }

    if (firstIndex < 0) {
      firstIndex = 0;
    }

    for (let i = firstIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}
module.exports = applyCustomIncludes;
