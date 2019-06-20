'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    // write code here
    if (!fromIndex) {
      fromIndex = 0;
    }

    if (fromIndex > this.length - 1) {
      return undefined;
    }

    if (valueToFind === undefined) {
      return false;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }

      if (isNaN(this[i])
          && typeof(this[i]) === 'number'
          && isNaN(valueToFind)
          && typeof(valueToFind) === 'number')
      {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
