'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function (valueToFind, fromIndex = 0) {
    let i = fromIndex;

    if (fromIndex < 0) {
      i = Math.abs(this.length + fromIndex);
    }

    for (i; i < this.length; i++) {
      if (valueToFind + '' === 'NaN' && this[i] + '' === 'NaN') {
        return true;
      } else if (this[i] === valueToFind || this[i] === isNaN(valueToFind)) {
        return true;
      }
    }
    
    return false;
  };
}

module.exports = applyCustomIncludes;
