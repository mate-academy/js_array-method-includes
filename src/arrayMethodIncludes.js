'use strict';

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    const startIndex = fromIndex < 0 ? this.length + fromIndex : fromIndex;

    for (let i = startIndex < 0 ? 0 : startIndex; i < this.length; i++) {
      if (Object.is(valueToFind, this[i])) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
