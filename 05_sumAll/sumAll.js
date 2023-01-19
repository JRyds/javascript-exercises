const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
        return "ERROR"
    } else {
        let numArray = [a, b];
        numArray.sort(function(a, b){return a - b});
        let startNum = numArray[0];
        let endNum = numArray[1];
        let result = 0;
        while (startNum < endNum + 1) {
            result = result + startNum;
            startNum++;
        }
        return result;
    }
};


console.log(sumAll(10, "90"))
// Do not edit below this line
module.exports = sumAll;
