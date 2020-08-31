'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(value, fromIndex = 0) {
    if (fromIndex >= this.length || value === undefined) {
      return false;
    }
    let index = fromIndex < 0 ? 0 : fromIndex;
    for (index; index < this.length; index++) {
      if (value === this[index] || (isNaN(value) && isNaN(this[index]))) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
