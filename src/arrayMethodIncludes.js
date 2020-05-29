'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex;

    if (-startIndex > this.length) {
      startIndex = 0;
    } else if (startIndex < 0) {
      startIndex += this.length;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (valueToFind === this[i]) {
        return true;
      } else if (Number.isNaN(valueToFind) && Number.isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
