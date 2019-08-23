'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    if (index < 0) {
      index = this.length + index;
    }

    if (index < 0) {
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      // eslint-disable-next-line no-self-compare
      if (this[i] !== this[i] && valueToFind !== valueToFind) {
        return true;
      }

      if (this[i] === valueToFind) {
        return true;
      }
    };

    return false;
  };
}

module.exports = applyCustomIncludes;
