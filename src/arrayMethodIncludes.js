'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind = undefined, fromIndex = 0) {
    // write code here
    let index = fromIndex;

    if (index < 0) {
      index = this.length + fromIndex;
    }

    if (index < 0) {
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
