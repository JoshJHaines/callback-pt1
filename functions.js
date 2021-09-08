const identity = function (value) {
	return value;
};
const first = function (array, n) {
	let newArr = [];
	n;
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
