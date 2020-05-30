'use strict';

/**
 * Implement method includes
 */

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let startIndex = fromIndex;

    if (startIndex >= this.length) {
      return false;
    };

    if (startIndex < 0) {
      startIndex = this.length + startIndex;
    };

    if (startIndex < 0) {
      startIndex = 0;
    };

    for (let i = startIndex || 0; i < this.length; i++) {
      if (Object.is(valueToFind, this[i])) {
        return true;
      };
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
