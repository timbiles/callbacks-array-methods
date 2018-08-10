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

describe('alternateIndexOf', () => {
  const arr = [1, 2, 3];
  test('alternateIndexOf should exist', () => {
    expect(alternateIndexOf).toBeDefined();
  });
  test('It should return the index of the item if the item is in the target array', () => {
    expect(arr.alternateIndexOf(2)).toBe(1);
  });
  test('It should return -1 if the item is not in the target array', () => {
    expect(arr.alternateIndexOf(5)).toBe(-1);
  });
});

describe('alternateForEach', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('alternateForEach should exist', () => {
    expect(alternateForEach).toBeDefined();
  });
  test('The callback should receive three arguments: the current value, index, and target array', () => {
    arr.alternateForEach(mock);
    expect(mock.mock.calls[0][0]).toBe(1);
    expect(mock.mock.calls[0][1]).toBe(0);
    expect(mock.mock.calls[0][2]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the target array', () => {
    expect(arr.alternateForEach(mock)).toBe(arr);
  });
});

describe('alternateMap', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('alternateMap should exist', () => {
    expect(alternateMap).toBeDefined();
  });
  test('The callback should receive three arguments: the current value, index, and target array', () => {
    arr.alternateMap(mock);
    expect(mock.mock.calls[0][0]).toBe(1);
    expect(mock.mock.calls[0][1]).toBe(0);
    expect(mock.mock.calls[0][2]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the new array', () => {
    expect(arr.alternateMap(mock)).toHaveLength(arr.length);
    expect(arr.alternateMap(mock)).toBeInstanceOf(Array);
  });
});

describe('alternateFilter', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('alternateFilter should exist', () => {
    expect(alternateFilter).toBeDefined();
  });
  test('The callback should receive three arguments: the current value, index, and target array', () => {
    arr.alternateFilter(mock);
    expect(mock.mock.calls[0][0]).toBe(1);
    expect(mock.mock.calls[0][1]).toBe(0);
    expect(mock.mock.calls[0][2]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the new array', () => {
    expect(arr.alternateFilter(mock)).toBeInstanceOf(Array);
  });
});

describe('alternateReduce', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('alternateReduce should exist', () => {
    expect(alternateReduce).toBeDefined();
  });
  test('The callback should receive four arguments: the accumulator, current value, index, and target array', () => {
    arr.alternateReduce(mock);
    expect(mock.mock.calls[0][0]).toBe(0);
    expect(mock.mock.calls[0][1]).toBe(1);
    expect(mock.mock.calls[0][2]).toBe(0);
    expect(mock.mock.calls[0][3]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the accumulator', () => {
    expect(arr.alternateReduce((acc, cur) => acc + cur)).toBe(6);
  });
});
