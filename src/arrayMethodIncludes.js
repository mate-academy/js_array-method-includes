'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(searchElem, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex = this.length - fromIndex;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (Object.is(this[i], searchElem)) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
