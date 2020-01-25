'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if ((this.length === 0) || (valueToFind === undefined)) {
      return false;
    }

    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if ((valueToFind === this[i])
          || ((valueToFind.toString() === 'NaN')
            && (this[i].toString() === 'NaN'))) {
          return true;
        }
      }
    } else {
      for (let i = this.length + fromIndex; i < this.length; i++) {
        if ((valueToFind === this[i])
          || ((valueToFind.toString() === 'NaN')
            && (this[i].toString() === 'NaN'))) {
          return true;
        }
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
