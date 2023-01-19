const convertToCelsius = function(degrees) {
  let rawConvert =  (degrees -32) * 5/9
  return parseFloat(rawConvert.toFixed(1))
};

const convertToFahrenheit = function(degrees) {
  let rawConvert =  degrees * 9/5 + 32
  return parseFloat(rawConvert.toFixed(1))

};


console.log(convertToFahrenheit(38))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
