# Callbacks and Array Methods

# Summary
This project will allow you to explore callbacks as you implement your own version of JavaScripts Array prototype methods: includes, indexOf, map, filter, forEach, and reduce.

We'll achieve this by writing functions that will receive two arguments, an arrary to operate on, and either an item to search for, in the case of includes and indexOf, or a callback function. These functions should not use their built-in counterparts. This means that when you define indexOf, it should not use .indexOf in its definition. 

You can find an example below.

```js
// findIndex will receive an array and a callback.
// It will not use the built in .findIndex to work.
const findIndex = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            return i
        }
    }
    return -1;
}
// indexOf will receive an array and an item to search for
const indexOf = (arr, item) => {}
// forEach will receive an array and a callback to execute for each item in the array.
const forEach = (arr, cb) => {}
```

# Instructions

### Setup

* Fork and clone this repository
* cd into the project directory
* run `npm install` or `yarn`
* Implement each method.
* Once you're done, run `yarn test` to make sure everything works.
--------------
* Includes
    * This method should accept two arguments: an array and an item to search the target array for
    * It should return true if the item is in the target array
    * It should return false if the item is not in the target array
    <details>
    <summary> <code> Includes </code> </summary>

    ```js
    const includes = (arr, item) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) return true;
        }

        return false;
    }
    ```
    </details>

* IndexOf
    * This method should accept two arguments: an array and an item to search the target array for
    * It should return the index of the item if the item is in the target array
    * It should return -1 if the item is not in the target array
    <details>
    <summary> <code> IndexOf </code> </summary>

    ```js
    const indexOf = (arr, item) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) return i;
        }

        return -1;
    }
    ```
    </details>

* ForEach
    * This method should accept two arguments: an array and a callback function
    * It should execute the callback for each item in the target array
    * The callback should receive three arguments: the current value, index, and target array
    * It should return the target array
    <details>
    <summary> <code> ForEach </code> </summary>

    ```js
    const forEach = (arr, cb) => {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = cb(arr[i], i, arr);
        }

        return arr;
    }
    ```
    </details>

* Map
    * This method should accept two arguments: an array and a callback function
    * It should create a new array
    * It should add the result of executing the callback for each item in the target array into the new array
    * The callback should receive three arguments: the current value, index, and target array
    * It should return the new array
    <details>
    <summary> <code> Map </code> </summary>

    ```js
    const map = (arr, cb) => {
        const mappedArr = [];

        for (let i = 0; i < arr.length; i++) {
            mappedArr.push(cb(arr[i], i, arr));
        }

        return mappedArr;
    }
    ```
    </details>

* Filter
    * This method should accept two arguments: an array and a callback function
    * It should create a new array
    * It should execute the callback for each item in the target array
    * The callback should receive three arguments: the current value, index, and target array
    * It should add the item to the new array if the result of the callback is true
    * It should return the new array
    <details>
    <summary> <code> Filter </code> </summary>

    ```js
    const filter = (arr, cb) => {
        const filteredArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (cb(arr[i], i, arr)) filteredArr.push(arr[i])
        }

        return filteredArr;
    }
    ```
    </details>

* Reduce
    * This method should accept three arguments: an array, a callback function and an optional accumulator
    * It should initialize the accumulator as zero if no accumulator is provided
    * It should execute the callback for each item in the target array
    * The callback should receive four arguments: the accumulator, current value, index, and target array
    * It should set the accumulator to the result of the callback
    * It should return the accumulator
    <details>
    <summary> <code> Reduce </code> </summary>

    ```js
    const reduce = (arr, cb, acc = 0) => {
        for (let i = 0; i < arr.length; i++) {
            acc = cb(acc, arr[i], i, arr)
        }

        return acc;
    }
    ```
    </details>
