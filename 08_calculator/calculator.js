const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	 return x - y;
};

const sum = function(array) {
  return array.reduce((acc, item) => acc + item, 0)
};

const multiply = function(array) {
  return array.reduce((acc, item) => acc * item, 1);
};

const power = function(x, y) {
  let product = 1;
	for (let i = 1; i <= y; i++) {
    product *= x;
  }
  return product;
};

const factorial = function(x) {
	let product = 1;
  if (x === 0) {
    return 1;
  } else {
    for (let i = x; x > 0; x--) {
      product *= x;
    }
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
