'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const arrayLength = this.length;
    if (
      arrayLength === 0
      || fromIndex >= arrayLength // eslint-disable-line
      || valueToFind === undefined  // eslint-disable-line
    ) {
      return false;
    }

    for (let i = fromIndex; i < arrayLength; i++) {
      if (
        isNaN(valueToFind)
        && isNaN(this[i]) // eslint-disable-line
        || valueToFind === this[i] // eslint-disable-line
      ) {
        return true;
      }
    }
    return false;
  };
}
module.exports = applyCustomIncludes;
