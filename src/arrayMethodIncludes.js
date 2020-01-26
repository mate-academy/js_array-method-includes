'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let loopStart = fromIndex;

    if (fromIndex < 0) {
      loopStart = this.length + fromIndex;
    }

    if (loopStart < 0) {
      loopStart = 0;
    }

    for (let i = loopStart; i < this.length; i += 1) {
      if (this[i] === valueToFind || (isNaN(valueToFind) && isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
