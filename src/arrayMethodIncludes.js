'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let result;
    let newIndex = fromIndex;

    if (newIndex < 0) {
      newIndex += this.length;

      if (newIndex < -this.length) {
        newIndex = 0;
      }
    }

    if (newIndex !== undefined) {
      return this[newIndex] === valueToFind;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      } else {
        result = false;
      }

      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
    }

    return result;
  };
}

module.exports = applyCustomIncludes;
