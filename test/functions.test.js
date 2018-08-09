const {
  alternateFilter,
  alternateForEach,
  alternateIncludes,
  alternateIndexOf,
  alternateMap,
  alternateReduce
} = require('../index');

describe('alternateIncludes', () => {
  const arr = [1, 2, 3];
  test('alternateIncludes should exist', () => {
    expect(alternateIncludes).toBeDefined();
  });
  test('It should return true if the item is in the target array', () => {
    expect(arr.alternateIncludes(2)).toBeTruthy();
  });
  test('It should return false if the item is not in the target array', () => {
    expect(arr.alternateIncludes(5)).toBeFalsy();
  });
});

// describe('alternateIndexOf', () => {
//   const arr = [1, 2, 3];
//   test('alternateIndexOf should exist', () => {
//     expect(alternateIndexOf).toBeDefined();
//   });
//   test('It should return true if the item is in the target array', () => {
//     expect(arr.alternateIndexOf(2)).toBeTruthy();
//   });
//   test('It should return false if the item is not in the target array', () => {
//     expect(arr.alternateIndexOf(5)).toBeFalsy();
//   });
// });
