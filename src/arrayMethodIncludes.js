'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    let include;

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      include = 0;
    } else if (fromIndex < 0) {
      include = this.length + fromIndex;
    } else {
      include = fromIndex;
    }

    for (let i = include; i < this.length; i++) {
      if ((this[i] === valueToFind)
      || (Number.isNaN(valueToFind)
      && Number.isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
