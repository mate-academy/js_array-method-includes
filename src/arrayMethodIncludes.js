'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (typeof valueToFind === 'undefined') {
      return false;
    }

    for (let i = fromIndex || 0; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(this[i]) && isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
