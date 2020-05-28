'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let i;

    if (fromIndex < 0) {
      if (this.length + fromIndex < 0) {
        i = 0;
      } else {
        i = this.length + fromIndex;
      }
    } else {
      i = fromIndex;
    }

    for (i; i < this.length; i++) {
      if (valueToFind === this[i] | isNaN(valueToFind) & isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
};
module.exports = applyCustomIncludes;
