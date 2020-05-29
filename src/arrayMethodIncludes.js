'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (this.length === 0 || fromIndex > this.length - 1) {
      return false;
    }

    let searchedItem = valueToFind;

    if (!searchedItem) {
      searchedItem = undefined;
    }

    let i = 0;

    if (fromIndex < 0 && (this.length + fromIndex) > 0) {
      i = this.length + fromIndex;
    } else if ((this.length + fromIndex) < 0) {
      i = 0;
    } else {
      i = fromIndex;
    }

    for (i; i < this.length; i++) {
      if (Object.is(this[i], searchedItem)
        || (this[i] === null && searchedItem === null)) {
        return true;
      } else if (i === this.length - 1) {
        return false;
      }
    }
  };
}

module.exports = applyCustomIncludes;
