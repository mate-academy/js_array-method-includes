'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (typeof valueToFind === 'undefined') {
      return false;
    }

    let start;

    if (fromIndex < 0) {
      start = this.length - 1 + fromIndex;
    } else {
      start = fromIndex;
    }

    if (typeof fromIndex === 'undefined') {
      start = 0;
    }

    if (fromIndex >= this.length) {
      return false;
    }

    for (let i = start; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }

      if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
