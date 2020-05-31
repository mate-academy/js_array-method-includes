'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind = undefined, fromIndex) {
    let searchStart = fromIndex;

    if (!fromIndex) {
      searchStart = 0;
    } else if (fromIndex < -this.length) {
      return false;
    } else if (fromIndex < 0) {
      searchStart = this.length + searchStart;
    }

    for (let i = searchStart; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
