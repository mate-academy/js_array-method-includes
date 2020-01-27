'use strict';

/**
 * Implement method includes
 */

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (!this.length) {
      return false;
    }

    if (isNaN(valueToFind)) {
      for (let i = 0; i < this.length; i++) {
        if (isNaN(this[i])) {
          return true;
        }
      }
    }

    let startIndex;

    if ((this.length + fromIndex) < 0 && fromIndex < 0) {
      startIndex = 0;
    } else if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    } else {
      startIndex = fromIndex;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
