'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let index = 0;
    if (!isNaN(fromIndex)) {
      index = fromIndex;
    }

    const length = this.length;
    for (let i = index; i < length; i++) {
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
