'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind = undefined, fromIndex = 0) {
    const length = this.length;
    let from = fromIndex;

    if (from < 0) {
      if (-from > length) {
        from = 0;
      } else {
        from += length;
      }
    }

    for (let i = from; i < length; i++) {
      if (
        (
          (
            typeof valueToFind === 'undefined'
            && typeof this[i] === 'undefined'
          ) || (
            Number.isNaN(valueToFind) && Number.isNaN(this[i])
          ) || this[i] === valueToFind
        ) && from <= length
      ) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
