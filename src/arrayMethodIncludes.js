'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let numFrom;

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      numFrom = 0;
    } else if (fromIndex < 0) {
      numFrom = this.length + fromIndex;
    } else {
      numFrom = fromIndex;
    }

    for (let i = numFrom; i < this.length; i++) {
      if ((Number.isNaN(valueToFind) && Number.isNaN(this[i]))
      || this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
