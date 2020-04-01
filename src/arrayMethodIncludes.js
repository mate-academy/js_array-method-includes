'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let realIndex = fromIndex;

    if (fromIndex < 0) {
      realIndex = this.length + fromIndex;

      if (realIndex < 0) {
        realIndex = this.length;
      }
    }

    for (let i = realIndex; i < this.length; i++) {
      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }

      if (valueToFind === this[i]) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
