'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index;

    if (fromIndex < -this.length) {
      index = 0;
    } else if (fromIndex < 0) {
      index = this.length + fromIndex;
    } else {
      index = fromIndex;
    }

    for (let i = index; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(this[i]) && isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
