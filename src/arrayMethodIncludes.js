'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let desiredIndex = fromIndex;

    if (fromIndex === undefined) {
      desiredIndex = 0;
    };

    if (fromIndex < 0) {
      desiredIndex = this.length + fromIndex;
    };

    if (fromIndex < 0 && -fromIndex >= this.length) {
      desiredIndex = 0;
    };

    for (let i = desiredIndex; i < this.length; i++) {
      if (isNaN(valueToFind) && isNaN(this[i])) {
        return true;
      };

      if (this[i] === valueToFind) {
        return true;
      };
    };

    return false;
  };
}

module.exports = applyCustomIncludes;
