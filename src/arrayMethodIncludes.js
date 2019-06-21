'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let result = false;
    for (let i = fromIndex; i < this.length - fromIndex; i++) {
      switch (true) {
        case valueToFind === undefined:
          result = true;
          break;
        case this[i] === valueToFind:
          result = true;
          break;
        case isNaN(valueToFind) && isNaN(this[i]):
          result = true;
          break;
        case valueToFind.length === 0:
          result = true;
          break;
      }
    }
    return result;
  };
}

module.exports = applyCustomIncludes;
