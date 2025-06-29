class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  // Teacher class extends User class
  constructor(username, email, password) {
    super(username); // Call the constructor of the parent class User and take value of username
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chai = new Teacher("chai", "chai@teacher.com", "123");

chai.logMe();
const masalaChai = new User("masalaChai");

masalaChai.logMe();

console.log(chai instanceof User); // true, chai is an instance of User
console.log(chai instanceof Teacher); // true, chai is an instance of Teacher
console.log(masalaChai instanceof User); // true, masalaChai is an instance of User
console.log(masalaChai instanceof Teacher); // false, masalaChai is not an instance of Teacher
