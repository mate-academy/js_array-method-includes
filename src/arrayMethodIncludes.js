'use strict';

/**
 * Implement method includes
 */

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (-fromIndex > this.length) {
      return false;
    }

    if (isNaN(valueToFind)) {
      for (let i = 0; i < this.length; i++) {
        if (isNaN(this[i])) {
          return true;
        }
      }
    }

    if (fromIndex === undefined) {
      for (let i = 0; i < this.length; i++) {
        if (this[i] === valueToFind) {
          return true;
        }
      }
    }

    if (fromIndex > 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === valueToFind) {
          return true;
        }
      }
    }

    if (fromIndex < 0) {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if (this[i] === valueToFind) {
          return true;
        }
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
