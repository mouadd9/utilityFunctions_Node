const util = require('./utilities.js');

const { add, subtract, multiply} = util;

const userInput1 = process.argv[2];
const userInput2 = process.argv[3];

console.log(add(userInput1, userInput2));
console.log(subtract(userInput1, userInput2)); 
console.log(multiply(userInput1, userInput2));  
