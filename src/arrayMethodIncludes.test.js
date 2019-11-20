'use strict';

const applyCustomIncludes = require('./arrayMethodIncludes');
const source = ['11', '22', '33', NaN, '', 3];
applyCustomIncludes();

test('includes2 is added to [].__proto__', () => {
  expect([].includes2)
    .toBeInstanceOf(Function);
});

test(`includes2 doesn't call default includes`, () => {
  expect([].includes2.toString().includes('.includes('))
    .toBe(false);
});

test(`without valueToFind`, () => {
  expect(source.includes2())
    .toBe(false);
});

test(`includes '11'`, () => {
  expect(source.includes2('11'))
    .toBe(true);
});

test(`includes '1'`, () => {
  expect(source.includes2('1'))
    .toBe(false);
});

test(`includes 11`, () => {
  expect(source.includes2(11))
    .toBe(false);
});

test(`includes '11' fromIndex 1`, () => {
  expect(source.includes2('11', 1))
    .toBe(false);
});

test(`includes 33 fromIndex -2`, () => {
  expect(source.includes2(33, -2))
    .toBe(false);
});

test(`includes 33 fromIndex -44`, () => {
  expect(source.includes2('33', -44))
    .toBe(true);
});

test(`includes 'NaN'`, () => {
  expect(source.includes2(NaN))
    .toBe(true);
});

test(`includes ''`, () => {
  expect(source.includes2(''))
    .toBe(true);
});
