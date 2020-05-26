'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let newFromIndex = fromIndex;

    // how to handle negative correct index number
    if (fromIndex < 0) {
      if (this.length + fromIndex >= 0) {
        newFromIndex += this.length;
      } else {
        return false;
      }
    }
    // check for big negative fromIndex

    for (let i = newFromIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      } else if (isNaN(valueToFind)) {
        if (isNaN(this[i])) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
