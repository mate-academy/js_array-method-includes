'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (Number.isNaN(valueToFind)) {
      return true;
    }

    let i;

    if (typeof fromIndex === 'number') {
      i = fromIndex;
    } else {
      i = 0;
    }

    for (i; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
