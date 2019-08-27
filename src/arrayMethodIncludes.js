'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (arguments.length === 0) {
      return false;
    }

    let i = 0;

    if (fromIndex !== undefined) {
      i = fromIndex > 0 ? fromIndex : this.length + fromIndex;
    }

    for (i; i < this.length; i++) {
      if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
      if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
