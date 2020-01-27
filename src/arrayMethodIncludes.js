'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    // write code here
    let count = 0;
    let foundIndex = fromIndex;

    if (typeof valueToFind === 'number' && !isNaN(valueToFind)) {
      return false;
    }

    if (this.length + foundIndex < 0) {
      return false;
    }

    if (Math.sign(foundIndex) === -1) {
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
