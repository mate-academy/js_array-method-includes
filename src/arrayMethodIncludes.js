'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let position = fromIndex;

    if (-position >= this.length || position === undefined) {
      position = 0;
    } else if (position >= this.length) {
      return -1;
    } else if (position < 0) {
      position = this.length + position;
    }

    for (let i = position; i < this.length; i++) {
      if (this[i] !== undefined && isNaN(this[i])) {
        return true;
      }
    }

    for (let i = position; i < this.length; i++) {
      if ((this[i] === valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
