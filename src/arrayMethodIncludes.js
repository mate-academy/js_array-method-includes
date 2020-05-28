'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let startIndex = fromIndex;

    if (startIndex < 0) {
      startIndex += this.length;

      if (startIndex < 0) {
        startIndex = 0;
      }
    }

    for (let i = startIndex; i < this.length; i++) {
      if (Number.isNaN(valueToFind) && Number.isNaN(this[i])) {
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
