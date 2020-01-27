'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (this.length === 0) {
      return false;
    }

    let validFromIndex = fromIndex;

    if (fromIndex < 0 && fromIndex < -this.length) {
      validFromIndex = 0;
    } else if (fromIndex < 0) {
      validFromIndex = this.length + fromIndex;
    }

    for (let i = 0 + validFromIndex; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(this[i]) && isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
