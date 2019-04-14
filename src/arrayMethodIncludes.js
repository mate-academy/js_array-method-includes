'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(item = null, index = 0) {
    let result = false;
    for (let i = index; i < this.length; i++) {
      if (this[i] === item || (isNaN(item) && isNaN(this[i]))) {
        result = true;
      }
    }
    return result;
  };
}

module.exports = applyCustomIncludes;
