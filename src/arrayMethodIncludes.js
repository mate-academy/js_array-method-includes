'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(elementInArray, index = 0) {
    for (let i = index; i < this.length; i++) {
      if (isNaN(elementInArray) &&
        typeof elementInArray === 'number' &&
        isNaN(this[i])) {
        return true;
      }
      if (this[i] === elementInArray) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
