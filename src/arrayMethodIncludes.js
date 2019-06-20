'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    for (let index = fromIndex; index < this.length; index++) {
      if (this[index] === valueToFind
        || (Number.isNaN(this[index]) && Number.isNaN(valueToFind))) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
