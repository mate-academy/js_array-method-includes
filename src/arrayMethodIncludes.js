'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (Number.isNaN(valueToFind)) {
      return this.findIndex(Number.isNaN) >= 0;
    }

    switch (Math.sign(fromIndex)) {
      case -1: {
        return this.indexOf(valueToFind) === this.length + fromIndex;
      }

      case 1: {
        return this.indexOf(valueToFind) === fromIndex;
      }

      default: {
        return this.indexOf(valueToFind) !== -1;
      }
    }
  };
}

module.exports = applyCustomIncludes;
