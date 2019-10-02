'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let i = fromIndex ? fromIndex : 0;

    for (i; i < this.length; i++) {
      if (this[i] === valueToFind || (Number.isNaN(this[i]) && Number.isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
