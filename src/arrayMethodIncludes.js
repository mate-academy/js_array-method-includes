'use strict';

/**
 * Implement method includes
 *
 */
function applyCustomIncludes() {
  [].__proto__.includes2 = function(...args) {
    return this.includes(...args);
  };
}

module.exports = applyCustomIncludes;
