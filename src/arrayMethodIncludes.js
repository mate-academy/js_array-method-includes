'use strict';
/* eslint-disable */
/**
 * Implement method includes
 */

function applyCustomIncludes() {
  [].__proto__.includes2 = function(valueToFind, fromIndex) {
    if (fromIndex >= this.length) {return false};
if (fromIndex < 0) {fromIndex = this.length + fromIndex};
if (fromIndex < 0) {fromIndex = 0};

for (let i = fromIndex || 0; i < this.length; i++) {
  if(Object.is(valueToFind, this[i])) {
    return true
  };
}

return false;
  };
}

module.exports = applyCustomIncludes;
