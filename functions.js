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
  
	if (n == undefined) {
		return array[array.length-1];
	}
	else {
    for (let i = array.length-1; newArr.length = 2; i--) {
		if (array[i - 1] != undefined) {
			newArr.push(array[i - 1]);
		}
	}
}
	return newArr;
};

test = last([1,2,3])
test

test2 = last([1,2,3], 1)
test2

test3 = last([1,2,3], 3)
test3

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
