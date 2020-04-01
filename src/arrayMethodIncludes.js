'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let fIndex = fromIndex;

    if ((this.length + fIndex) < 0) {
      fIndex = 0;
    } else if (fIndex < 0) {
      fIndex = this.length + fIndex;
    }

    for (let i = fIndex; i < this.length; i++) {
      if (valueToFind + '' === 'NaN' && this[i] + '' === 'NaN') {
        return true;
      }

      if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
