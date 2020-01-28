'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let count = 0;
    let foundIndex = fromIndex;

    if ((typeof valueToFind === 'number' && !isNaN(valueToFind))
      || this.length + foundIndex < 0) {
      return false;
    }

    if (foundIndex < 0) {
      foundIndex = this.length + foundIndex;
    }

    for (let i = foundIndex; i < this.length; i++) {
      if (`${this[i]}` === `${valueToFind}`) {
        count++;
      }
    }

    return !!(count);
  };
}

module.exports = applyCustomIncludes;
