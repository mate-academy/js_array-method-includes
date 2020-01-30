/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if ((arguments.length === 0 && valueToFind !== undefined)
      || fromIndex >= this.length) {
      return -1;
    }

    let searchFrom = fromIndex;

    if (fromIndex < 0) {
      searchFrom = this.length + fromIndex;
    }

    if (searchFrom < 0) {
      searchFrom = 0;
    }

    for (let index = searchFrom; index < this.length; index++) {
      if (valueToFind === this[index]
        || (Number.isNaN(valueToFind) && Number.isNaN(this[index]))
      ) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
