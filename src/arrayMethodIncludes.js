'use strict';
/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    let searchIndex = fromIndex;
    if (searchIndex < 0) {
      searchIndex += this.length;
    };
    for (let i = 0; i < this.length; i++) {
      if (!fromIndex) {
        searchIndex = i;
      };
      if (valueToFind === undefined) {
        return false;
      };
      if (isNaN(this[i]) === true && isNaN(valueToFind) === true) {
        return true;
      };
      if (this[i] === valueToFind && searchIndex === i) {
        return true;
      };
    };
    return false;
  };
};
module.exports = applyCustomIncludes;
