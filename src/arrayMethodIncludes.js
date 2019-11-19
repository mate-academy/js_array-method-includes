'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = '0') {
    let i = fromIndex;

    if (i < 0) {
      i = this.length + i;
    }

    for (i; i < this.length; i++) {
      if (this[i] === valueToFind
        || valueToFind === ''
        || (isNaN(valueToFind) && valueToFind !== undefined)) {
        return true;
      }

      return false;
    }
  };
}

module.exports = applyCustomIncludes;
