'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let newIndex = fromIndex;

    if (newIndex <= -1 * this.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = this.length - Math.abs(newIndex);
    }

    for (let i = newIndex; i < this.length; i++) {
      if (this[i] === valueToFind || Number.isNaN(valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
