'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let beginingIndex = fromIndex;

    if (fromIndex < 0) {
      beginingIndex = this.length + fromIndex < 0 ? 0 : this.length + fromIndex;
    }

    while (beginingIndex < this.length) {
      if (valueToFind === this[beginingIndex]
          || (isNaN(valueToFind) && isNaN(this[beginingIndex]))
      ) {
        return true;
      }

      ++beginingIndex;
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
