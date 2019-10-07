'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  Array.prototype.includes2 = function(valueToFind, fromIndex = 0) {
    if (arguments.length === 0) {
      return false;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(valueToFind) && isNaN(this[i]))) {
        return true;
      }
    }
    return false;
  }
}

module.exports = applyCustomIncludes;
