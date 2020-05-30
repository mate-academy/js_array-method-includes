'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (fromIndex < -this.length) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = 0;
    }

    if (fromIndex < 0) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = this.length + fromIndex;
    }

    for (let i = fromIndex; i < this.length; i++) {
      if (Object.is(valueToFind, this[i])) {
        return true;
      }
    }

    return false;
  };
}
module.exports = applyCustomIncludes;
