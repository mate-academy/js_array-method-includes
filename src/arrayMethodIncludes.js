'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchIndex = fromIndex;

    if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }

    for (let i = 0; i < this.length; i++) {
      if (valueToFind === this[i] && i >= searchIndex) {
        return true;
      }

      if (isNaN(valueToFind) && `${valueToFind}` === `${this[i]}`) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
