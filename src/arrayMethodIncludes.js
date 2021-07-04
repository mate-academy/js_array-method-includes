'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let searchIndex = fromIndex;

    if (fromIndex >= this.length) {
      return false;
    } else if (fromIndex <= -this.length || !fromIndex) {
      searchIndex = 0;
    } else if (fromIndex > -this.length && fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }

    for (let i = searchIndex; i < this.length; i++) {
      if (this[i] === valueToFind
        || (Number.isNaN(this[i]) && Number.isNaN(valueToFind))) {
        return true;
      }
      continue;
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
