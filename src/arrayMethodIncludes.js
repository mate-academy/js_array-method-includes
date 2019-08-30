'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (valueToFind === undefined || this.length === 0) {
      return false;
    }
    let i;
    if (fromIndex >= 0) {
      i = fromIndex;
    } else if (fromIndex < 0) {
      i = this.length + fromIndex;
    } else if (!fromIndex) {
      i = 0;
    }
    for (i; i < this.length; i++) {
      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      } else if (valueToFind === this[i]) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
