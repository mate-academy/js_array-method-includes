'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let searchIndex = fromIndex;
    if (fromIndex < 0) {
      searchIndex = this.length + fromIndex;
    }
    for (let i = searchIndex; i < this.length; i++) {
      if (arguments.length < 1) {
        return false;
      }
      if (isNaN(this[i]) === true && isNaN(valueToFind) === true) {
        return true;
      }
      if (this[i] === valueToFind && searchIndex === i) {
        return true;
      }
      if (valueToFind === '') {
        return true;
      }
    }
    return false;
  };
}
module.exports = applyCustomIncludes;
