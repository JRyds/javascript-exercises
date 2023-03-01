const fibonacci = function(nth) {
    // Check for edge cases
    const num = parseInt(nth);
    if (num <= 0) {
        return "OOPS";
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    // Initialize the first two numbers in the sequence
    let num1 = 1;
    let num2 = 1;
    let fibnum;

    // Generate the Fibonacci sequence up to the num number
    for (let i = 3; i <= num; i++) {
        fibnum = num1 + num2;
        num1 = num2;
        num2 = fibnum;
    }

    return fibnum;
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
