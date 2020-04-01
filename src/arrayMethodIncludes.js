'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let startIndex = fromIndex;

    if (fromIndex === undefined) {
      startIndex = 0;
    }

    if (fromIndex < 0) {
      startIndex = this.length + fromIndex;
    }

    if (startIndex < 0) {
      return false;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }

      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
