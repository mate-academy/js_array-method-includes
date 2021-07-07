'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let start = fromIndex;
    if (start === undefined) {
      start = 0;
    }
    if (Number.isNaN(valueToFind)) {
      for (let i = start; i < this.length; i++) {
        if (Number.isNaN(this[i])) {
          return true;
        }
      }
    }
    for (let i = start; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
