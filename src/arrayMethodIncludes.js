'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }
    // eslint-disable-next-line max-len
    if (fromIndex < 0 && (fromIndex + this.length) > 0 && (fromIndex + this.length) < this.length) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = fromIndex + this.length;
    } else if (fromIndex < 0 && fromIndex + this.length < 0) {
      // eslint-disable-next-line no-param-reassign
      fromIndex = 0;
    }
    for (let i = fromIndex; i < this.length; i++) {
      if (valueToFind === this[i]) {
        return true;
      } else if (isNaN(valueToFind) && isNaN(valueToFind) === isNaN(this[i])) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
