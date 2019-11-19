'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let fromIndexNew = fromIndex;

    if (typeof valueToFind === 'undefined') {
      return false;
    }

    if (fromIndex < 0) {
      fromIndexNew = this.length + fromIndexNew;
    }

    for (let i = fromIndexNew || 0; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(this[i]) && isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
