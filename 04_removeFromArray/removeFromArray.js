const removeFromArray = function(arr, ...value) {
    return arr.filter(function(ele){
        return !value.includes(ele);
    });

};

//console.log(removeFromArray([1, 2, 3, 4], 3, 2))
// Do not edit below this line
module.exports = removeFromArray;
