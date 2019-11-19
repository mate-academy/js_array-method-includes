'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (valueToFind === undefined) {
      return false;
    }

    if (fromIndex && this[fromIndex] !== valueToFind) {
      return false;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i].toString() === valueToFind.toString()
          && typeof this[i] === typeof valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
