'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let i = 0;

    if (fromIndex < 0) {
      i = this.length - fromIndex;
    } else {
      i = fromIndex;
    }

    for (i; i < this.length; i++) {
      if ((this[i] === valueToFind)
        || (Number.isNaN(this[i]) && Number.isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
