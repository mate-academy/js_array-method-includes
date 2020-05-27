'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let changedFromIndex = fromIndex;

    if (Math.abs(changedFromIndex) > this.length) {
      return false;
    } else if (changedFromIndex < 0) {
      changedFromIndex = this.length - Math.abs(changedFromIndex);
    }

    for (let i = changedFromIndex; i < this.length; i++) {
      if (Object.is(valueToFind, this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
