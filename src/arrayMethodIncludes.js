'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (this.length === 0) {
      return undefined;
    }

    const findValue = valueToFind || undefined;
    let indexFrom = fromIndex || 0;

    if (Math.sign(indexFrom) < 0) {
      indexFrom = this.length - Math.abs(indexFrom);

      if (Math.sign(indexFrom) < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i < this.length; i++) {
      if (this[i] === findValue) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
