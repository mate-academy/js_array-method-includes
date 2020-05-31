'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (fromIndex < -this.length) {
      return false;
    }

    let searchStart = (!fromIndex) ? 0 : fromIndex;

    if (fromIndex < 0) {
      searchStart = this.length + fromIndex;
    }

    for (let i = searchStart; i < this.length; i++) {
      if (Object.is(valueToFind, this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
