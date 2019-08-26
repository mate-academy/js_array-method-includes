'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let i;

    if (typeof fromIndex === 'number') {
      i = fromIndex;
    } else {
      i = 0;
    }

    for (i; i < this.length; i++) {
      if (isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }
      if (this[i] === valueToFind) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
