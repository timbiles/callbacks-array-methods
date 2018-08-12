const { filter, forEach, includes, indexOf, map, reduce } = require('../index');

describe('includes', () => {
  const arr = [1, 2, 3];
  test('includes should exist', () => {
    expect(includes).toBeDefined();
  });
  test('It should return true if the item is in the target array', () => {
    expect(includes(arr, 2)).toBeTruthy();
  });
  test('It should return false if the item is not in the target array', () => {
    expect(includes(arr, 5)).toBeFalsy();
  });
});

describe('indexOf', () => {
  const arr = [1, 2, 3];
  test('indexOf should exist', () => {
    expect(indexOf).toBeDefined();
  });
  test('It should return the index of the item if the item is in the target array', () => {
    expect(indexOf(arr, 2)).toBe(1);
  });
  test('It should return -1 if the item is not in the target array', () => {
    expect(indexOf(arr, 5)).toBe(-1);
  });
});

describe('forEach', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('forEach should exist', () => {
    expect(forEach).toBeDefined();
  });
  test('The callback should receive three arguments: the current value, index, and target array', () => {
    forEach(arr, mock);
    expect(mock.mock.calls[0][0]).toBe(1);
    expect(mock.mock.calls[0][1]).toBe(0);
    expect(mock.mock.calls[0][2]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the target array', () => {
    expect(forEach(arr, mock)).toBe(arr);
  });
});

describe('map', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('map should exist', () => {
    expect(map).toBeDefined();
  });
  test('The callback should receive three arguments: the current value, index, and target array', () => {
    map(arr, mock);
    expect(mock.mock.calls[0][0]).toBe(1);
    expect(mock.mock.calls[0][1]).toBe(0);
    expect(mock.mock.calls[0][2]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the new array', () => {
    expect(map(arr, mock)).toHaveLength(arr.length);
    expect(map(arr, mock)).toBeInstanceOf(Array);
  });
});

describe('filter', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('filter should exist', () => {
    expect(filter).toBeDefined();
  });
  test('The callback should receive three arguments: the current value, index, and target array', () => {
    filter(arr, mock);
    expect(mock.mock.calls[0][0]).toBe(1);
    expect(mock.mock.calls[0][1]).toBe(0);
    expect(mock.mock.calls[0][2]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the new array', () => {
    expect(filter(arr, mock)).toBeInstanceOf(Array);
  });
});

describe('reduce', () => {
  const arr = [1, 2, 3];
  const mock = jest.fn();
  test('reduce should exist', () => {
    expect(reduce).toBeDefined();
  });
  test('The callback should receive four arguments: the accumulator, current value, index, and target array', () => {
    reduce(arr, mock);
    expect(mock.mock.calls[0][0]).toBe(0);
    expect(mock.mock.calls[0][1]).toBe(1);
    expect(mock.mock.calls[0][2]).toBe(0);
    expect(mock.mock.calls[0][3]).toBe(arr);
  });
  test('It should execute the callback for each item in the target array', () => {
    expect(mock.mock.calls.length).toBe(arr.length);
  });
  test('It should return the accumulator', () => {
    expect(reduce(arr, (acc, cur) => acc + cur)).toBe(6);
  });
});
