'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = valueToFind;
    if (index < 0) {
      index = this.length + valueToFind;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind
        || (Number.isNaN(this[i])
        && Number.isNaN(valueToFind))) {
          return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
