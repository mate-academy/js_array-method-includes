'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let index = fromIndex;

    if (fromIndex === null | fromIndex === undefined) {
      index = 0;
    }

    if (this.length + fromIndex < 0) {
      index = 0;
    } else if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    for (index; index < this.length; index++) {
      if (this[index] !== undefined
        & isNaN(this[index])
        & isNaN(valueToFind)) {
        return true;
      }

      if (this[index] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
