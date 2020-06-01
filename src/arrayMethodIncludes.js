'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind = undefined, fromIndex = 0) {
    if (fromIndex > this.length) {
      return false;
    }

    const length = this.length;
    let from = fromIndex >= 0 ? fromIndex : fromIndex + length;

    from = from < 0 ? 0 : from;

    for (let i = from; i < length; i++) {
      if (Object.is(this[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
