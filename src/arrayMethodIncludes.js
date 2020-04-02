'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const items = this;
    if (fromIndex < 0) {
      fromIndex += items.length;
    }

    if (fromIndex < 0) {
      fromIndex = 0;
    }

    for (let i = fromIndex; i < items.length; i++) {
      if (Object.is(items[i], valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
