'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchFrom = fromIndex;

    if (searchFrom < 0) {
      searchFrom = this.length + searchFrom < 0
        ? 0
        : this.length + searchFrom;
    }

    for (let i = searchFrom; i < this.length; i++) {
      if (valueToFind === this[i]
         || (Number.isNaN(this[i]) && Number.isNaN(valueToFind))
      ) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
