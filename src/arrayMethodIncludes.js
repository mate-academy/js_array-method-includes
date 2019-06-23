'use strict';

/**
 * Implement method includes
 */

 function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {

    let i = fromIndex;

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    }

    if (this.length < 1) {
      return false;
    }

    for (; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
      if (isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }
    }

    return false

  };
}

module.exports = applyCustomIncludes;
