'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index;

    if (fromIndex < 0) {
      index = this.length + fromIndex;
    } else {
      index = fromIndex;
    };

    for (index; index < this.length; index++) {
      if (
        this[index] === valueToFind
        || (Number.isNaN(this[index])
        && Number.isNaN(valueToFind))
      ) {
        return true;
      };
    };

    return false;
  };
}

module.exports = applyCustomIncludes;
