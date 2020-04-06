'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (fromIndex >= this.length) {
      return -1;
    }

    let index = fromIndex;

    if (this.length + (index) < 0 || index === undefined) {
      index = 0;
    }

    if (index < 0) {
      index = this.length + (index);
    }

    for (let i = index; i < this.length; i++) {
      if (this[i] === valueToFind || isNaN(valueToFind) & isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
