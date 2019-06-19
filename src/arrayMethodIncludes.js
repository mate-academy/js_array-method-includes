'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let index = fromIndex;

    for (let i = 0; i < this.length; i++) {
      if (!fromIndex) {
        index = i;
      }

      if (arguments.length < 1) {
        return false;
      }

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
console.log(source.includes2(NaN));

module.exports = applyCustomIncludes;
