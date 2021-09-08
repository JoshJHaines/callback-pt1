const identity = function (value) {
	return value;
};
const first = function (array, n) {
	let newArr = [];

	if (n == undefined) {
		return array[0];
	}
	else {
    for (let i = 0; i <= n; i++) {
		if (array[i - 1] != undefined) {
			newArr.push(array[i - 1]);
		}
	}
}
	return newArr;
};

const last = function (array, n) {
  let newArr = [];
	if (n === undefined) {
		return array[array.length - 1];
	}
	if (n === 0) {
		return [];
	}
	if (n >= array.length) {
		return array;
	} else {
		for (i = array.length - n; i < array.length; i++) {
			newArr.push(array[i]);
		}
		return newArr;
	}
};

const each = function (collection, callback) {
  if (collection instanceof Array) {
		for (i = 0; i < collection.length; i++) {
			callback (collection[i], i, collection)
		}
	} else {
    for ( let key in collection) {
      callback(collection[key], key, collection)
    }
  }
};




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
