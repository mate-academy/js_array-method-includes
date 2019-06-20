'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind
        || (`${this[i]}` === `${NaN}` && `${valueToFind}` === `${NaN}`)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
