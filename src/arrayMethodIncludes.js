'use strict';

/**
 * Implement method includes
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 */

function applyCustomIncludes () {
  [].__proto__.includes2 = function () {
    // write code here
  };
}

module.exports = applyCustomIncludes;
