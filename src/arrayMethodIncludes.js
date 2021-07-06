
'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    let index = fromIndex;

    if (index < 0) {
      index = (this.length - 1) + index;
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === valueToFind || Number.isNaN(this[i])) && i > index) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
