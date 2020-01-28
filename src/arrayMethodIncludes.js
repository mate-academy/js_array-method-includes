'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchIndex = fromIndex;

    if (searchIndex < 0) {
      searchIndex = this.length + searchIndex;
    }

    if (searchIndex < 0) {
      searchIndex = 0;
    }

    for (let i = searchIndex; i < this.length; i++) {
      if (this[i] === valueToFind || Number.isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
