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

    if (from > length) {
      return false;
    }

    for (let i = from; i < length; i++) {
      if (typeof valueToFind === 'undefined') {
        if (typeof this[i] === 'undefined') {
          return true;
        }
      } else if (Number.isNaN(valueToFind)) {
        if (Number.isNaN(this[i])) {
          return true;
        }
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
