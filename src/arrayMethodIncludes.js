'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let correctStart;
    if (fromIndex < 0) {
      correctStart = this.length + fromIndex;
    } else if (!fromIndex) {
      correctStart = 0;
    } else {
      correctStart = fromIndex;
    }
    for (let i = correctStart; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
