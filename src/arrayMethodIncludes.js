'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let startFind = fromIndex;

    if (!startFind) {
      startFind = 0;
    }

    if (startFind < 0) {
      startFind += this.length;
    }

    if (startFind < 0) {
      startFind = 0;
    }

    for (let i = startFind; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      }

      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
