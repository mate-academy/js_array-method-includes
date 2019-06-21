'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let index = 0;
    if (!isNaN(fromIndex)) {
      index = fromIndex < 0 ? this.length - fromIndex : fromIndex;
    }

    for (let i = index; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
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
