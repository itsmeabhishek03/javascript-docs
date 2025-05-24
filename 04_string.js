//string in javascript and its methods

var str = "Hello World";

//string length
console.log(str.length); // 11
//string index
console.log(str[0]); // H
console.log(str.charAt(0)); // H
//string slice
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(6)); // World
console.log(str.slice(-5)); // World
console.log(str.slice(-5, -1)); // Worl

//string substring
console.log(str.substring(0, 5)); // Hello
console.log(str.substring(6)); // World

//string substr
console.log(str.substr(0, 5)); // Hello

//string replace
console.log(str.replace("World", "JavaScript")); // Hello JavaScript

//string toUpperCase
console.log(str.toUpperCase()); // HELLO WORLD

//string trim
console.log(str.trim()); // Hello World

//string split
console.log(str.split(" ")); // [ 'Hello', 'World' ]

//string includes
console.log(str.includes("World")); // true

//string startsWith
console.log(str.startsWith("Hello")); // true

//string endsWith
console.log(str.endsWith("World")); // true

//string repeat
console.log(str.repeat(2)); // Hello WorldHello World

//string concat
console.log(str.concat("!", " How are you?")); // Hello World! How are you?

//string localeCompare
console.log(str.localeCompare("Hello")); // 1
console.log(str.localeCompare("Hello World")); // 0

//string match
console.log(str.match(/o/g)); // [ 'o', 'o' ]

//string search
console.log(str.search(/o/g)); // 4
