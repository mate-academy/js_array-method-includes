'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let startIndexSearch = fromIndex;
    if (fromIndex === undefined) {
      startIndexSearch = 0;
    }
    if (valueToFind === undefined) {
      return false;
    }
    for (let i = startIndexSearch; i < this.length; i++) {
      if (valueToFind === this[i] || isNaN(valueToFind)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
