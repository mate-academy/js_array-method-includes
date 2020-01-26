'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let tempIndex = fromIndex;

    if (isNaN(valueToFind)) {
      for (let i = 0; i < this.length; i++) {
        if (isNaN(this[i])) {
          return true;
        }
      }

      return false;
    }

    if (fromIndex === undefined) {
      tempIndex = 0;
    }

    if (tempIndex < 0) {
      const negIndex = this.length + tempIndex;

      for (let i = this.length - 1; i > negIndex - 1; i--) {
        if (this[i] === valueToFind) {
          return true;
        }
      }

      return false;
    }

    for (let i = tempIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
