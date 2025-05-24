// Functions in JavaScript

// 1. Function Declaration
function greeting() {
  console.log("Hello World");
}

greeting(); // Hello World , this is a function call
console.log(greeting); // [Function: greeting] this is a function reference

function add(num1, num2) {
  return num1 + num2;
}

const res = add(2, 3); // 5
console.log(res); // 5

add(3, "3"); // 33
