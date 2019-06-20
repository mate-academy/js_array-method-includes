'use strict';
/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let searchIndex = fromIndex;
    for (let i = 0; i < this.length; i++) {
      if (!fromIndex) {
        searchIndex = i;
      }
      if (arguments.length < 1) {
        return false;
      }
      if (isNaN(this[i]) === true && isNaN(valueToFind) === true) {
        return true;
      }
      if (this[i] === valueToFind && searchIndex === i) {
        return true;
      }
    }
    return false;
  };
};
module.exports = applyCustomIncludes;