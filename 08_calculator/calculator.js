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

const power = function() {
	
};

const factorial = function() {
	
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
