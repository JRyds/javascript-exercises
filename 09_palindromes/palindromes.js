const palindromes = function (string) {
    let stripped = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let strippedRev = stripped.split('').reverse().join('');
    return stripped === strippedRev;

};

// Do not edit below this line
module.exports = palindromes;
