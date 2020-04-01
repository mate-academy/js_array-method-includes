'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex;

    if (startIndex < 0) {
      if ((this.length + startIndex) < 0) {
        startIndex = 0;
      } else {
        startIndex = this.length + startIndex;
      }
    }

    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === valueToFind || isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
