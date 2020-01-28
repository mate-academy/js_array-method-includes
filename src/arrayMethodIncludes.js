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

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      index = 0;
    } else if (fromIndex < 0) {
      index = this.length + fromIndex;
    } else {
      index = fromIndex;
    }

    for (let i = index; i < this.length; i++) {
      if ((Number.isNaN(valueToFind) && Number.isNaN(this[i]))
        || this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
