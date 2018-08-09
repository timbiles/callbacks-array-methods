# Callbacks and Array Methods

# Summary
This project will allow you to explore callbacks as you implement your own version of JavaScripts Array prototype methods: includes, indexOf, map, filter, forEach, and reduce.

We'll achieve this by `extending` the prototype. This means that we'll add our own function to the `Array Contstructor's` prototype. We'll call our methods `alternateRealMethodName` eg. `alternateMap` or `alternateForEach`.

```js
Array.prototype.alternateMap = function() {}
```

In the function definition of the prototype method we can use the keyword `this` to reference the targeted array.

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

* IndexOf
    * This method should accept one argument: an item to search the target array for
    * If the item is in the array, return the index of that item
    * If the item is not in the array, return -1

* For Each
    * This method should accept one argument: a callback function
    * It should execute the callback for each item in the target array
    * It should return the target array

* Map
    * This method should accept one argument: a callback function
    * It should create a new array
    * It should add the result of executing the callback for each item in the target array into the new array.
    * It should return the new array

* Filter
    * This method should accept one argument: a callback function
    * It should create a new array
    * It should execute the callback for each item in the target array
    * It should add the item to the new array if the result of the callback is true
    * It should return the new array

* Reduce
    * This method should accept two arguments: a callback function and an optional accumulator
    * It should initialize the accumulator as zero if no accumulator is provided
    * It should execute the callback for each item in the target array
    * It should set the accumulator to the result of the callback
    * It should return the accumulator
