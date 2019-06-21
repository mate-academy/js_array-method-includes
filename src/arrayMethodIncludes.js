'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let index = fromIndex < 0 ? fromIndex + this.length : fromIndex;

    for (let i = index; i < this.length; i++) {
      index = i;

      if (Number.isNaN(this[i]) && Number.isNaN(valueToFind)) {
        return true;
      }

      if (this[i] === valueToFind && index === i) {
        return true;
      }
    }
    return false;
  };
}

applyCustomIncludes();
const source = ['11', '22', '33', NaN, '', 3];
console.log(source.includes2('11', 1));

module.exports = applyCustomIncludes;
