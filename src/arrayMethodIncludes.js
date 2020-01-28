'use strict';

/**
 * Implement method includes
 */
function isEqual(x1, x2) {
  return x1 === x2 || (Number.isNaN(x1) && Number.isNaN(x2));
}

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchFrom = fromIndex;

    if (fromIndex > this.length || -fromIndex > this.length) {
      return false;
    }

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    }

    if (searchFrom < 0) {
      searchFrom = 0;
    }

    if (isEqual(arguments.length, 0) || isEqual(valueToFind, undefined)) {
      for (let i = searchFrom; i <= this.length - 1; i++) {
        if (isEqual(this[i], undefined)) {
          return true;
        }
      }
    } else {
      for (let i = searchFrom; i <= this.length - 1; i++) {
        if (isEqual(this[i], valueToFind)) {
          return true;
        }
      }
    }

    return false;
  };
};

module.exports = applyCustomIncludes;
