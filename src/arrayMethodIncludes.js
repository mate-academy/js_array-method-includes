'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (valueToFind === this[i]) {
        return true;
      } else if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }
    }
    
    return false;
  };
}

module.exports = applyCustomIncludes;
