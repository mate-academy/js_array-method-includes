'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (!this.length) {
      return false;
    }

    let searchIndex;

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      searchIndex = 0;
    } else if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    } else {
      searchIndex = fromIndex;
    }

    for (let i = searchIndex; i < this.length; i++) {
      if ((Number.isNaN(valueToFind) && Number.isNaN(this[i]))
      || this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
