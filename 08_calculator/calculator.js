const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
  let numSum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  return numSum;
	
};



const multiply = function(arr) {
  let numSum = arr.reduce(function (accumulator, currentValue) {
    return accumulator * currentValue;
  });

  return numSum;
};

console.log(multiply([1, 2, 3]))

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
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
