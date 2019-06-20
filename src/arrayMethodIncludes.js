'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    for (let i = 0; i < this.length; i++) {
      if ((this[i] === valueToFind && i === fromIndex)
        || (this[i] === valueToFind && !fromIndex)
        || (Number.isNaN(this[i]) && Number.isNaN(valueToFind))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
