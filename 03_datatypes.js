//Primitive (pass by value) data types
const number = 0.1;
var isloggedIn;
const temperature = null;

// Non-primitive (pass by reference) data types
const superheroes = ["spiderman", "batman", "superman"];
const obj = {
  name: "abhishek",
  age: 22,
  isActive: true,
};

const myfunction = function () {
  console.log("Hello World");
};

console.log(typeof number); // Output: number
console.log(typeof isloggedIn); // Output: undefined
console.log(typeof superheroes); // Output: object (arrays are objects in JavaScript)
console.log(typeof obj); // Output: object
console.log(typeof myfunction); // Output: function
console.log(typeof temperature); // Output: object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// stack and heap memory
// stack memory (primitive data types)

var a = 10;
var b = a; // b is a copy of a
var b = 20; // b is a copy of a, so changing b will not change a
console.log(a); // Output: 10
console.log(b); // Output: 20
console.log(a === b); // Output: false

// heap memory (non-primitive data types)
var obj1 = {
  name: "abhishek",
  age: 22,
};
var obj2 = obj1; // obj2 is a reference to obj1

obj1.name = "John Doe"; // Changing obj1 will also change obj2
// as you are changing the reference of obj1 therefore obj2 will also change
console.log(obj1.name); // Output: John Doe
console.log(obj2.name); // Output: John Doe
