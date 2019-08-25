'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (valueToFind === undefined || this.length === 0) {
      return false;
    }

    let result = false;
    let i = 0;

    if (fromIndex !== undefined) {
      i = fromIndex > 0 ? fromIndex : this.length + fromIndex;
    }

    for (i; i < this.length; i++) {
      if (isNaN(this[i]) && isNaN(valueToFind)) {
        result = true;
        break;
      }
      if (this[i] === valueToFind) {
        result = true;
        break;
      }
    }

    return result;
  };
}

module.exports = applyCustomIncludes;
