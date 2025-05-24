// DATA TYPES IN JAVASCRIPT
// 1. Primitive Data Types
//    - String
let name = "John Doe"; // String
//    - Number
let age = 30; // Number
//    - Boolean
let isActive = true; // Boolean
//    - Undefined
let address; // Undefined
//    - Null
let phone = null; // Null
//    - Symbol
let symbol = Symbol("unique"); // Symbol
//    - BigInt
let bigInt = BigInt(123456789012345678901234567890); // BigInt
// 2. Non-Primitive Data Types
//    - Object
let person = {
  name: "John Doe",
  age: 30,
  isActive: true,
}; // Object
//    - Array
let numbers = [1, 2, 3, 4, 5]; // Array
//    - Function
function greet() {
  console.log("Hello, World!");
} // Function
//    - Date
let date = new Date(); // Date
//    - RegExp
let regex = /[a-z]/; // Regular Expression
//    - Map
let map = new Map(); // Map
map.set("key", "value"); // Set a key-value pair
map.get("key"); // Get the value by key
//    - Set
let set = new Set(); // Set
set.add(1); // Add a value
set.add(2); // Add another value
set.has(1); // Check if the value exists

console.log(typeof phone); // Output: object because null is considered an object in JavaScript
