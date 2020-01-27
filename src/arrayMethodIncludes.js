'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let curentIndex = (fromIndex < 0) ? this.length + fromIndex : fromIndex;

    if (this.length + fromIndex < 0) {
      curentIndex = 0;
    }

    for (let i = curentIndex; i < this.length; i++) {
      if (this[i] === valueToFind || (isNaN(valueToFind) && isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
