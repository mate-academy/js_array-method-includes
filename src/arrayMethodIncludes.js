'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let index = 0;
    if (typeof fromIndex === 'number') {
      if (fromIndex > 0) {
        index = fromIndex;
      }

      if ((fromIndex < 0) & (fromIndex > (-this.length)))
        index = fromIndex + this.length;
    }

    for (let i = index; i < this.length; i++) {
      if (this[i] === valueToFind || (this[i] + '' === 'NaN' & '' + valueToFind === 'NaN')) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
