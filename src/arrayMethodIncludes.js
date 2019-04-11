'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(item, position = 0) {
    for (let i = position; i < this.length; i++) {
      if (Number.isNaN(this[i]) && Number.isNaN(item)) {
        return true;
      } else if (this[i] === item) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
