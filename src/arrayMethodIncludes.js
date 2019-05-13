'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(elem, index = 0) {
    if (elem === undefined) {
      return false;
    }
    for (index; index < this.length; index++) {
      if (this[index] === elem) {
        return true;
      } else if (isNaN(this[index]) && isNaN(elem)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
