'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex;

    if (fromIndex < (-1) * this.length) {
      startIndex = 0;
    } else if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    } else {
      startIndex = fromIndex;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (!Number.isNaN(valueToFind)) {
        if (this[i] === valueToFind) {
          return true;
        }
      } else {
        if (Number.isNaN(this[i])) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
