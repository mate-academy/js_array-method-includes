'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      switch (true) {
        case valueToFind === undefined:
          return false;
        case this[i] === valueToFind:
          return true;
        case (isNaN(this[i]) && isNaN(valueToFind)):
          return true;
        case valueToFind.length === 0:
          return true;
        default:
          return false;
      }
    }
  };
}

module.exports = applyCustomIncludes;
