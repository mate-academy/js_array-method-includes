'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let changedFromIndex = fromIndex;

    if (changedFromIndex * -1 > this.length) {
      return false;
    } else if (changedFromIndex < 0) {
      changedFromIndex = this.length - (changedFromIndex * -1);
    }

    for (let i = changedFromIndex; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return Object.is(valueToFind, this[i]);
      } else if (this[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
