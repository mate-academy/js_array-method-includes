'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex;

    if (fromIndex < (-this.length)) {
      startIndex = 0;
    } else if (fromIndex < 0 && fromIndex >= (-this.length)) {
      startIndex = this.length + fromIndex;
    }

    if (this.length === 0) {
      return false;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
