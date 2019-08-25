'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let result = false;
    for (let i = fromIndex; i < this.length; i += 1) {
      if (this[i] === valueToFind) {
        result = true;
      }

      if (Number.isNaN(valueToFind) && Number.isNaN(this[i])) {
        result = true;
      }
    }

    return result;
  };
}

module.exports = applyCustomIncludes;
