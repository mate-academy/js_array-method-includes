'use strict';

/**
 * Implement method includes
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    return fromIndex === undefined
      ? this.some(el => Object.is(el, valueToFind))
      : this.slice(fromIndex).some(el => Object.is(el, valueToFind));
  };
}

module.exports = applyCustomIncludes;
