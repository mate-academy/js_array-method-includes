'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let indexFrom = fromIndex;

    if (fromIndex < 0) {
      indexFrom = fromIndex + this.length;
    }

    if (indexFrom < 0) {
      indexFrom = 0;
    }

    for (indexFrom; indexFrom < this.length; indexFrom++) {
      if ((this[indexFrom] === valueToFind)
      || (isNaN(valueToFind) && isNaN(this[indexFrom]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
