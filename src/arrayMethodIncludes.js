'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(token, index = 0) {
    if (index < 0) {
      for (let i = index + this.length; i >= 0; i--) {
        if (this[i] === token || Number.isNaN(token)) return true;
      }
      return false;
    }
    for (let i = index; i < this.length; i++) {
      if (this[i] === token || Number.isNaN(token)) return true;
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
