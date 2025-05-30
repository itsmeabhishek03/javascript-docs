//Arrays in javascript

// Ways to define an array
let arr1 = new Array(1, 2, 3, 4, 5);
let arr2 = [1, 2, 3, 4, 5];

// Array methods
// console.log(arr1.length); // 5
// console.log(arr2.length); // 5
// console.log(arr1[0]); // 1
// console.log(arr2[0]); // 1

// // Array methods
// console.log(arr1.push(6)); // 6
// console.log(arr1.pop()); // 6
// console.log(arr1.shift()); // 1
// console.log(arr1.unshift(0)); // 5

//difference between slice and splice
// slice() returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
// splice() changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. The original array will be modified.
console.log(arr1.slice(0, 2));
console.log(arr1.splice(0, 2));

console.log(arr1.concat(arr2)); // [0, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
const arr = arr1.join(); // 2,3,4,5
console.log(typeof arr); // string

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros) //this will add the whole array as a single element, like this - ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // this will add the each array value as a single element, like this - ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]; // this will add the each array value as a single element, like this - ["thor", "Ironman", "spiderman", "superman", "flash", "batman"] (same as concat but mostly used)

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real1 = [...another_array];
console.log("my array", real1); // [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] (shallow copy)
const real_another_array = another_array.flat(Infinity); // this will flatten the array to a single level, like this - [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5] (same as concat but mostly used)
console.log(real_another_array);

console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({ name: "hitesh" })); // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
