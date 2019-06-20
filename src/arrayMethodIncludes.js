'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    if (valueToFind === undefined) {
      return false;
    }

    if (fromIndex >= 0) {
      for (let i = fromIndex; i < this.length; i++) {
        if ((this[i] === valueToFind)
          || (isNaN(valueToFind) && isNaN(this[i]))) {
          return true;
        }
      }
    } else {
      for (let i = fromIndex; i < 0; i++) {
        if (this[this.length + i] === valueToFind
          || (isNaN(valueToFind) && isNaN(this[i]))) {
          return true;
        }
      }
    }

    return false;
  };
};

/* const n = [1,2,NaN,20,3,4,5];
applyCustomIncludes()
console.log(n.includes2());
console.log(n.includes()); */
module.exports = applyCustomIncludes;
