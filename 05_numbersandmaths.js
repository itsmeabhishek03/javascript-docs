//Numbers and Maths

//1) Numbers in JavaScript
// Two ways to create numbers in JavaScript
const num1 = 10; // integer
const num3 = new Number(10); // object

console.log(num1); // 10
console.log(num3); // [Number: 10]

//2) Number methods
// Number methods are static methods of the Number object

console.log(num3.toString()); // "10"
console.log(num3.toFixed(2)); // "10.00"
console.log(num3.toExponential(2)); // "1.00e+1"
console.log(num3.toPrecision(2)); // "10"
console.log(num3.toLocaleString()); // "10"

//++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++

// Math is a built-in object that has properties and methods for mathematical constants and functions
// Math is not a constructor, so you cannot create a Math object
console.log(Math); // [Math: Math]
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Math methods
console.log(Math.abs(-10)); // 10
console.log(Math.ceil(10.1)); // 11
console.log(Math.floor(10.9)); // 10
console.log(Math.round(10.5)); // 11

// Math random
console.log(Math.random()); // 0.123456789 (0 to 1)
console.log(Math.floor(Math.random() * 10)); // random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between 10 and 20
