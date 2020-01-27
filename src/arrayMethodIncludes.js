'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let index;

    if (Math.abs(fromIndex) !== fromIndex) {
      index = (this.length + fromIndex) || 0;
    } else {
      index = fromIndex || 0;
    }

    if (index <= -1) {
      index = 0;
    }

    for (let i = index; i < this.length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
