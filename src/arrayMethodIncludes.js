'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    }

    if (this.length + fromIndex < 0) {
      index = 0;
    };

    for (let i = index; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }

      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
