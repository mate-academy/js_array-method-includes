'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const items = this;
    let index = fromIndex;

    if (fromIndex < 0) {
      index = items.length + fromIndex;
    }

    if (index < 0) {
      return false;
    }

    if (isNaN(valueToFind)) {
      for (let i = index; i < items.length; i++) {
        if (isNaN(items[i])) {
          return true;
        }
      }
    }

    for (let i = index; i < items.length; i++) {
      if (items[i] === valueToFind) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
