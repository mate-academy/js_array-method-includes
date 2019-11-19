'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromindex = 0) {
    if (valueToFind === undefined) {
      return false;
    }
    for (let i = fromindex; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)
      || (isNaN(this[i]) && isNaN(valueToFind))) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
