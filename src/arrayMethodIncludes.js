'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex = 0) {
    let include = fromIndex;

    if ((this.length + fromIndex) < 0) {
      include = 0;
    } else if (include < 0) {
      include = this.length + fromIndex;
    }

    for (let i = include; i < this.length; i++) {
      if ((this[i] === valueToFind)
      || (Number.isNaN(valueToFind)
      && Number.isNaN(this[i]))
      ) {
        return true;
      }
    }

    return false;
  };
}

module.exports = applyCustomIncludes;
