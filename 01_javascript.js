const ID = "1234567890"; // const cannot be changed, ID = "0987654321"; // This will throw an error
let name = "John Doe"; // let can be changed
var age = 30; // var can be changed , but it's not recommended to use var
isactive = "true"; // can be changed , but it's not recommended to use

// console.log(ID);
// console.log(name);
// console.log(age);
// console.log(isactive);

name = "Jane";
age = 25;
isactive = "false";

// console.log(ID);
// console.log(name);
// console.log(age);
// console.log(isactive);

console.table([ID, name, age, isactive]); // This will print the values in a table format
