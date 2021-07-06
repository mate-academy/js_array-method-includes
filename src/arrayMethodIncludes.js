'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    let indexStart;

    if (fromIndex < 0) {
      indexStart = this.length + fromIndex;
    } else {
      indexStart = fromIndex;
    }

    if (indexStart + this.length < 0) {
      indexStart = 0;
    }

    if (isNaN(valueToFind)) {
      for (let i = indexStart; i < this.length; i++) {
        if (isNaN(this[i])) {
          return true;
        }
      }
    }

    for (let i = indexStart; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
