'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (arguments.length !== 0) {
      let i = fromIndex === undefined ? 0 : fromIndex;
      while (i < this.length) {
        if (this[i] === valueToFind
          || (isNaN(valueToFind) && isNaN(this[i]))) {
          return true;
        }
        i++;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;

applyCustomIncludes();
