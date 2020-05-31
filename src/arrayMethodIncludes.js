'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (this.length === 0) {
      return undefined;
    }

    let newIndex = fromIndex;

    if (newIndex < 0) {
      newIndex += this.length;

      if (newIndex < 0) {
        newIndex = 0;
      }
    }

    for (let i = newIndex; i < this.length; i++) {
      if (this[i] === valueToFind
        || (Number.isNaN(valueToFind) && Number.isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
