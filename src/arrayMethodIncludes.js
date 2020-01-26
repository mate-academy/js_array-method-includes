'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let i = typeof fromIndex === 'number'
      ? fromIndex
      : 0;

    for (i; i < this.length; i++) {
      if (Number.isNaN(valueToFind) && Number.isNaN(this[i])) {
        return true;
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
