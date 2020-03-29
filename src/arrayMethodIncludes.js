'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let result;
    let index = fromIndex;

    if (index < 0) {
      index += this.length;

      if (index < -this.length) {
        index = 0;
      }
    }

    if (index !== undefined) {
      return this[index] === valueToFind;
    }

    if (Number.isNaN(valueToFind) === Number.isNaN(NaN)) {
      return true;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      } else {
        result = false;
      }
    }

    return result;
  };
}

module.exports = applyCustomIncludes;
