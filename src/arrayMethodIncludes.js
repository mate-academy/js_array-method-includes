'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex >= this.length) {
      return false;
    }
    let index = 0;
    fromIndex < 0 ? index = 0 : index = fromIndex;
    for (index; index < this.length; index++) {
      if (typeof valueToFind === typeof this[index]) {
        if (valueToFind === this[index]) {
          return true;
        } else if (isNaN(valueToFind) && isNaN(this[index])) {
          return true;
        } else {
          continue;
        }
      } else {
        continue;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
