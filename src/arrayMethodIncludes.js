'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let pos;

    if (fromIndex < 0 && (this.length + fromIndex) < 0) {
      pos = 0;
    } else if (fromIndex < 0) {
      pos = this.length + fromIndex;
    } else {
      pos = fromIndex;
    }

    for (let i = pos; i < this.length; i++) {
      if (valueToFind === this[i]
        || (Number.isNaN(valueToFind) && Number.isNaN(this[i]))) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
