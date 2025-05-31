const user = {
  username: "Abhishek",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`); // this refers to the user object it is context of the function
    console.log(this);
  },
};

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this; // This return is optional, if you don't return anything it will return the current context (this)
}

// Without new keyword it will overide the current contex
const userone = User("hitesh", 12, true);
const usertwo = User("ChaiAurCode", 11, false); // This will also not create a new object
console.log(userone); // here name will be ChaiAurCode becuse it will override the current context
console.log(usertwo); // here also it will be ChaiAurCode

const userOne = new User("hitesh", 12, true); // Using the 'new' keyword creates a new object and sets 'this' to that object
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne); // { username: 'hitesh', loginCount: 12, isLoggedIn: true, greeting: [Function] }
console.log(userTwo); // { username: 'ChaiAurCode', loginCount: 11, isLoggedIn: false, greeting: [Function] }

console.log("constructor is", userOne.constructor); // Output - constructor is [Function: User]

//When new is written before a function call, it does the following:
// 1. Creates a new empty object.
// 2. Sets the prototype of the new object to the prototype of the function.
// 3. Calls the function with 'this' set to the new object.
// 4. Returns the new object unless the function explicitly returns another object.
