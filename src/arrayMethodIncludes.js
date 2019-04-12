'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(item = null, index = 0) {
    let result = false;
    for (index; index < this.length; index++) {
      if (this[index] === item || isNaN(item)) {
        result = true;
      }
    }
    return result;
  };
}

module.exports = applyCustomIncludes;
