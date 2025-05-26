const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

// forEach
const result = coding.forEach((language, index) => {
  console.log(`${index}: ${language}`);
  return index; // Note: forEach does not return a value
});

console.log("Result of forEach:", result); // undefined, so forEach does not return anything therefore we do not use it frequently in functional programming

// filter
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = num.filter((number) => {
  return number % 2 === 0; // Returns true for even numbers
});

console.log("Even Numbers:", evenNumbers); // [2, 4, 6, 8, 10] in fileters we can have some condition and it will return the array of elements that satisfy the condition

// map
const mynumbers = [1, 2, 3, 4, 5];
const doubledNumbers = mynumbers.map((number) => {
  return number * 2; // Returns each number multiplied by 2
});

console.log("Doubled Numbers:", doubledNumbers); // [2, 4, 6, 8, 10] in map we can transform the array elements and it will return the new array with transformed elements

// reduce
const myorder = [100, 200, 300, 400, 500];
const totalOrder = myorder.reduce((total, current) => {
  return total + current; // Sums up all the elements
}, 0); // Initial value is 0
console.log("Total Order Amount:", totalOrder); // 1500 in reduce we can reduce the array to a single value, here we are summing up all the elements of the array
