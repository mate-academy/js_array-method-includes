'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let i = fromIndex;
    if (fromIndex < 0) {
      i = this.length + fromIndex;
    }

    for (i; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
