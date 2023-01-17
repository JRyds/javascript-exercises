const repeatString = function(str, num) {
    let output = '';
    let i = 0

    if (num < 0) {
        return 'ERROR';
    } else {
        while (i < num) {
            output = output + str;
            i++
        }
        return output;
    }
}

// Do not edit below this line
module.exports = repeatString;
