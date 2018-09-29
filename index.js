// Please ensure your methods match the name below
// eg. const includes = () => || function includes() {}

/* includes */
const includes = (arr, item) => {
  const newArr = []
  for(let i=0; i<arr.length; i++){
    if(arr[i] === item) {
      newArr.push(arr[i])
    } 
  }
  return newArr.length ? true : false
}

/* indexOf */
const indexOf = (arr, item) => {
  for(let i =0; i<arr.length; i++){
    if(arr[i] === item){ 
      return i
    }
  }
  return -1
  }

/* forEach */
const forEach = (arr, cb) => {
  for(let i=0; i<arr.length; i++){
     cb(arr[i], i, arr)
  }
  return arr
}

/* map */
const map = (arr, cb) => {
  const newArr = [];

  for(let i=0; i<arr.length; i++){
    newArr.push(cb(arr[i], i, arr))
  }
  return newArr
}

/* filter */
const filter = (arr, cb) => {
  const newArr = [];

  for(let i=0; i<arr.length; i++) {
    if (arr[i]) {
      newArr.push(cb(arr[i], i, arr))
    }
  }
  return newArr
}

/* reduce */
const reduce = (arr, cb, acc) => {
  acc = 0;

  for(let i=0; i<arr.length; i++) {
    acc = cb(acc, arr[i], i, arr)
  }
  return acc

}
module.exports = {
  includes,
  indexOf,
  forEach,
  map,
  filter,
  reduce
};