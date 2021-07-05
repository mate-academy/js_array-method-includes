'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      } else if (isNaN(valueToFind)) {
        return true;
      };
    };

    return false;
  };
}

module.exports = applyCustomIncludes;
