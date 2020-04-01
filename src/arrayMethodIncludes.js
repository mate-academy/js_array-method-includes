'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    const items = this;
    let indexFrom = fromIndex;

    if (!indexFrom) {
      indexFrom = 0;
    }

    if (fromIndex < 0) {
      indexFrom = items.length - Math.abs(fromIndex);

      if (indexFrom < 0) {
        indexFrom = 0;
      }
    }

    for (let i = indexFrom; i < items.length; i++) {
      const argsIsNaN = isNaN(valueToFind) && isNaN(items[i]);

      if (items[i] === valueToFind || argsIsNaN) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
