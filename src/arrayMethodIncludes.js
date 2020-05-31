'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex;

    if (index > this.length) {
      return false;
    } else if (index < 0) {
      index += this.length;
    };

    if (index < 0) {
      index = 0;
    };

    for (let i = index; i < this.length; i++) {
      if (Number.isNaN(valueToFind) === false) {
        if (this[i] === valueToFind) {
          return true;
        };
      } else if (Number.isNaN(this[i]) === true) {
        return true;
      }
    };

    return false;
  };
}

module.exports = applyCustomIncludes;
