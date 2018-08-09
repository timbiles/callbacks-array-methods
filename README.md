# Callbacks and Array Methods

# Summary
This project will allow you to explore callbacks as you implement your own version of JavaScripts Array prototype methods: includes, indexOf, map, filter, forEach, and reduce.

We'll achieve this by `extending` the prototype. This means that we'll add our own function to the `Array Contstructor's` prototype. We'll call our methods `alternateRealMethodName` eg. `alternateMap` or `alternateForEach` so as not to override or redefine the exisiting prototype methods.

```js
Array.prototype.alternateMap = function() {}
```

In the function definition of the prototype method we can use the keyword `this` to reference the targeted array. We will avoid the es6 arrow syntax when using the keyword `this` to ensure that `this` maintains the correct reference to the correct value. The arrow changes `this'` value. We'll cover `this` more in-depth later.

```js
Array.prototype.alternateMap = function() {
    console.log(this);
    // [1, 2, 3]
}

const arr = [1, 2, 3];

arr.alternateMap();
```

# Instructions

* Includes
    * This method should accept one argument: an item to search the target array for
    * If the item is in the array, return true
    * If the item is not in the array, return false
    <details>
    <summary> <code> Includes </code> </summary>

    ```js
    Array.prototype.alternateIncludes = function(item) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === item) return true;
        }

        return false;
    }
    ```
    </details>

* IndexOf
    * This method should accept one argument: an item to search the target array for
    * If the item is in the array, return the index of that item
    * If the item is not in the array, return -1
    <details>
    <summary> <code> IndexOf </code> </summary>

    ```js
    Array.prototype.alternateIndexOf = function(item) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === item) return i;
        }

        return -1;
    }
    ```
    </details>

* ForEach
    * This method should accept one argument: a callback function
    * It should execute the callback for each item in the target array
    * The callback should receive three arguments: the current value, index, and target array
    * It should return the target array
    <details>
    <summary> <code> ForEach </code> </summary>

    ```js
    Array.prototype.alternateForEach = function(cb) {
        for (let i = 0; i < this.length; i++) {
            this[i] = cb(this[i], i, this);
        }

        return this;
    }
    ```
    </details>

* Map
    * This method should accept one argument: a callback function
    * It should create a new array
    * It should add the result of executing the callback for each item in the target array into the new array.
    * The callback should receive three arguments: the current value, index, and target array
    * It should return the new array
    <details>
    <summary> <code> Map </code> </summary>

    ```js
    Array.prototype.alternateMap = function(cb) {
        const arr = [];

        for (let i = 0; i < this.length; i++) {
            arr.push(cb(this[i], i, this));
        }

        return arr;
    }
    ```
    </details>

* Filter
    * This method should accept one argument: a callback function
    * It should create a new array
    * It should execute the callback for each item in the target array
    * It should add the item to the new array if the result of the callback is true
    * It should return the new array
    <details>
    <summary> <code> Filter </code> </summary>

    ```js
        Array.prototype.alternateFilter = function(cb) {
            const arr = [];

            for (let i = 0; i < this.length; i++) {
                if (cb(this[i], i, this)) arr.push(this[i])
            }

            return arr;
        }
    ```
    </details>

* Reduce
    * This method should accept two arguments: a callback function and an optional accumulator
    * It should initialize the accumulator as zero if no accumulator is provided
    * It should execute the callback for each item in the target array
    * The callback should receive four arguments: the accumulator, current value, index, and target array
    * It should set the accumulator to the result of the callback
    * It should return the accumulator
    <details>
    <summary> <code> Reduce </code> </summary>

    ```js
    Array.prototype.alternateReduce = function(cb, acc = 0) {
        for (let i = 0; i < this.length; i++) {
            acc = cb(acc, this[i], i, this)
        }

        return acc;
    }
    ```
    </details>
