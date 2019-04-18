'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(value, fromIndex = 0) {
    if (value === undefined || this.length === 0) return false;
    for (let index = fromIndex; index < this.length; index++) {
      if (this[index] === value || (isNaN(value) && isNaN(this[index]))) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
