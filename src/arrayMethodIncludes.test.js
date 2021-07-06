'use strict';

/* eslint-disable */

require('./arrayMethodIncludes')();

describe('includes2', () => {
  test('should be added to [].__proto__', () => {
    expect([].includes2)
      .toBeInstanceOf(Function);
  });

  test(`should not use default includes`, () => {
    expect([].includes2.toString().includes('.includes('))
      .toBe(false);
  });

  test(`should return true for existent element`, () => {
    expect(['11', '22', '33'].includes2('22'))
      .toBe(true);
  });

  test(`should not match an element partly`, () => {
    expect(['11', '22', '33'].includes2('2'))
      .toBe(false);
  });

  test(`Should not find an element matching only with == `, () => {
    expect(['11', '22', '33'].includes2(22))
      .toBe(false);
  });

  test(`should not find an element if present only before fromIndex`, () => {
    expect(['11', '22', '33'].includes2('22', 2))
      .toBe(false);
  });

  test(`should handle negative fromIndex as a shift from the end`, () => {
    expect(['11', '22', '33'].includes2('22', -2))
      .toBe(true);

    expect(['11', '22', '33'].includes2('22', -1))
      .toBe(false);
  });

  test(`should correctly search for null`, () => {
    expect([undefined, NaN, '', null].includes2(null))
      .toBe(true);
  });

  test(`should correctly search for NaN`, () => {
    expect([undefined, NaN, '', null].includes2(NaN))
      .toBe(true);
  });

  test(`should correctly search for undefined`, () => {
    expect([undefined, NaN, '', null].includes2(undefined))
      .toBe(true);
  });

  test(`should work for big negative fromIndex`, () => {
    expect(['11', '22', '33'].includes2(undefined, -999))
      .toBe(false);
  });

  test(`should search for undefined if valueToFind was not given`, () => {
    expect(['11', '22', '33'].includes2())
      .toBe(false);

    expect(['11', '22', undefined].includes2())
      .toBe(true);
  });
});
