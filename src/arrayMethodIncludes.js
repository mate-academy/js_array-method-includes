'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex > this.length) {
      return false;
    }

    let index = fromIndex;

    if (index < 0) {
      index = this.length + fromIndex;
    }

    if (index < 0) {
      index = 0;
    }

    for (index; index < this.length; index++) {
      if (this[index] === valueToFind
      || (Number.isNaN(valueToFind)
      && Number.isNaN(this[index]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
