// singleton
// Object.create

// object literals

const mySym = Symbol("key1"); // Symbol is a unique and immutable primitive value that can be used as a key for object properties

const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary",
  [mySym]: "mykey1", // the key is a symbol
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email) // this will print the value of email
// console.log(JsUser["email"]) // this will print the value of email (2 ways to access the value)
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) // output: mykey1

JsUser.email = "hitesh@chatgpt.com";
// Object.freeze(JsUser) // this will freeze the object and you cannot change the values of the object
JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting()); // this is a function call from the object
console.log(JsUser.greetingTwo()); // this will call the function with the object as the context



// const tinderUser = new Object() // 1st way to create an object
const tinderUser = {} // 2nd way to create an object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // output: { obj1: { 1: 'a', 2: 'b' }, obj2: { 3: 'a', 4: 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4) // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj3 = {...obj1, ...obj2} // output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output: [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // output: [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // output: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // output: true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // this will destructure the object and assign the value of courseInstructor to instructor

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
