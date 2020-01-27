'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let beginingIndex = 0;

    if (fromIndex < 0) {
      beginingIndex = this.length + fromIndex < 0 ? 0 : this.length + fromIndex;
    } else if (fromIndex > 0) {
      beginingIndex = fromIndex;
    }

    for (; beginingIndex < this.length; ++beginingIndex) {
      if (valueToFind === this[beginingIndex]
          || (isNaN(valueToFind) && isNaN(this[beginingIndex]))
      ) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
