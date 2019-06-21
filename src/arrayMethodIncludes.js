'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let findIndex = valueToFind;

    if (findIndex < 0) {
      findIndex = this.length + valueToFind;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === findIndex
        || (Number.isNaN(this[i]) && Number.isNaN(findIndex))) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
