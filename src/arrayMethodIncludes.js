'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }

    let step = fromIndex;
    if (step < 0) {
      step = this.length + (fromIndex);
    }
    for (let i = step; i < this.length; i++) {
      if (isNaN(this[i]) && (isNaN(valueToFind))) {
        return true;
      }
      if (this[i] === valueToFind) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
