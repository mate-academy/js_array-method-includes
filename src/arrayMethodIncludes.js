'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    if (index < 0) {
      index = (this.length - 1) + index;
    }

    for (let i = 0; i < this.length; i++) {
      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }

      if (valueToFind === this[i] && i > index) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
