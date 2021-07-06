'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    const thisLength = this.length;
    let index = fromIndex;

    if (fromIndex === undefined) {
      index = 0;
    };

    if (fromIndex < 0) {
      index = thisLength + fromIndex;
    };

    if (fromIndex < 0 && -fromIndex >= thisLength) {
      index = 0;
    };

    for (let i = index; i < thisLength; i++) {
      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      };

      if (this[i] === valueToFind) {
        return true;
      };
    };

    return false;
  };
}

module.exports = applyCustomIncludes;
