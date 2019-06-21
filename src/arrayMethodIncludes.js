'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }

    let firstIndex;
    if (fromIndex < 0) {
      firstIndex = this.length - 1 + fromIndex;
    } else {
      firstIndex = fromIndex;
    }

    for (let i = firstIndex; i < this.length; i++) {
      if (this[i] === valueToFind || this[i] === undefined) {
        return true;
      }
      if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
