'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let i = fromIndex;

    if (this.length < 1) {
      return false;
    }

    if (fromIndex < 0) {
      i = this.length + fromIndex;
    } else {
      i = fromIndex;
    }

    for (i = fromIndex; i < this.length; i++) {
      if (this[i] === valueToFind) {
        return true;
      } else if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }
    }

    return false;
  };
}

applyCustomIncludes();
const source = ['1', '2', '3', undefined];
console.log(source.includes2(undefined));
console.log(source.includes(undefined));

module.exports = applyCustomIncludes;
