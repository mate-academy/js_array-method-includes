'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    const thisArrLength = this.length;
    let start = 0;

    if (arguments.length === 0) {
      return false;
    };

    if (fromIndex < 0) {
      return false;
    };

    if (isNaN(fromIndex)) {
      start = 0;
    };

    if (arguments.length === 2) {
      start = fromIndex;
    };

    for (let i = start; i < thisArrLength; i++) {
      if (String(valueToFind) === 'NaN') {
        if (String(this[i]) === 'NaN') {
          return true;
        };
      };

      if (this[i] === valueToFind) {
        return true;
      };
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
