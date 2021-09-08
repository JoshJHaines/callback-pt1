const identity = function (value) {
  return value;
};
const first = function (array, n) {
  let newArr = []
  n

    for (let i = 0; i <= n; i++){
      if (n == undefined){
        newArr.push(array[0])
      }
      else if (array[i-1] != undefined){
        newArr.push(array[i-1])
      }

  }
  return newArr
};

test = first([1,2,3])
test

test2 = first([1,2,3], 1)
test2

test3 = first([1,2,3], 3)
test3
const last = function (array, n) {};

const each = function (collection, callback) {};
const indexOf = function (array, target) {};
const map = function (collection, iterator) {};

module.exports = {
  identity,
  first,
  last,
  each,
  indexOf,
  map,
};
