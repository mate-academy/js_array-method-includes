'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let i = arguments.length < 2 ? 0 : fromIndex;
    const value = arguments.length < 1 ? true : valueToFind;

    for (i; i < this.length; i++) {
      if (value === this[i] || (isNaN(value) && isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
