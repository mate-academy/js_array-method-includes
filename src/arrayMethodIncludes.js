'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let desiredIndex = fromIndex;

    if (fromIndex < 0) {
      desiredIndex = this.length + fromIndex;
    }

    if (desiredIndex < 0) {
      return false;
    }

    for (let i = desiredIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }

      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
