'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let startFrom = fromIndex;
    if (startFrom === undefined) {
      startFrom = 0;
    }

    for (let i = startFrom; i < this.length; i++) {
      if (this[i] === valueToFind || (Number.isNaN(this[i]) && Number
        .isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
