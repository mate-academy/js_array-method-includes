'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let i = arguments.length < 2 ? 0 : fromIndex;

    for (i; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }
    }

    return (isNaN(this[i])
      && isNaN(valueToFind)
      && valueToFind !== undefined);
  };
}

module.exports = applyCustomIncludes;
