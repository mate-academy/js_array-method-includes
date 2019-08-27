'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (arguments.length === 0) {
      return false;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (isNaN(valueToFind) || this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
