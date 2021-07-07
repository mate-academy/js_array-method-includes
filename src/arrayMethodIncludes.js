'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind = 0, fromIndex = 0) {
    for (const [index, elem] of this.entries()) {
      if (index >= fromIndex) {
        if (Number.isNaN(elem) && Number.isNaN(valueToFind)) {
          return true;
        }
        if (elem === valueToFind) {
          return true;
        }
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
