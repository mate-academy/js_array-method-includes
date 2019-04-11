'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(isElement, index = 0) {
    for (let i = index; i < this.length; i++) {
      if (isNaN(isElement) && typeof isElement === 'number') {
        if (isNaN(this[i])) {
          return true;
        }
      }
      if (this[i] === isElement) {
        return true;
      }
    }
    return false;
  };
}

module.exports = applyCustomIncludes;
