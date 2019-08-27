'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    if (index < 0 && (this.length + index) > 0) {
      index = this.length + index;
    }

    for (let i = index; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }

      if (this[i] === valueToFind) {
        return true;
      }
    };

    return false;
  };
}

module.exports = applyCustomIncludes;
