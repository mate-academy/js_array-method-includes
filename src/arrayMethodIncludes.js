'use strict';

/**
 * Implement method includes
 */

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let i = fromIndex;

    for (i; i < this.length; i++) {
      // eslint-disable-next-line no-self-compare
      if ((valueToFind !== valueToFind) && (this[i] !== this[i])) {
        return true;
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
