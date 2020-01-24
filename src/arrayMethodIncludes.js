'use strict';

/**
 * Implement method includes
 */
/*eslint-disable*/
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind
        || (this[i] !== this[i] && valueToFind !== valueToFind)) {
        return true;
      };
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
