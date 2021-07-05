'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }

    let newIndex = fromIndex;
    if (newIndex >= this.length) {
      return false;
    };

    if (newIndex < 0) {
      newIndex = 1 + this.length + newIndex;
      if (newIndex < 0) {
        newIndex = 0;
      };
    };

    for (let i = newIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
      if (isNaN(this[i]) && isNaN(valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
