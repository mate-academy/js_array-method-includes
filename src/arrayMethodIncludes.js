'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(token, index = 0) {
    if (index < 0) {
      index = index + this.length;
      for (index; index >= 0; index--) {
        if (this[index] === token || Number.isNaN(token)) return true;
      }
      return false;
    }
    for (index; index < this.length; index++) {
      if (this[index] === token || Number.isNaN(token)) return true;
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
