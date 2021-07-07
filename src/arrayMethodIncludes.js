'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (arguments.length === 0) {
      return false;
    }

    let i = fromIndex;

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    }

    for (i; i < this.length; i++) {
      if (this[i] === valueToFind
      || (isNaN(valueToFind)
      && isNaN(this[i]))) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
