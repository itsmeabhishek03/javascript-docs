class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    // Static method, can be called without creating an instance of the class Static methods are not called on instances, but on the class itself
    return `123`;
  }
}

const Abhishek = new User("Abhishek");
//console.log(Abhishek.createId()); // This will not work because createId is a static method and should be called on the class itself, not on the instance
console.log(User.createId()); // This will work, as createId is a static method of the User class

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "i@phone.com");
console.log(Teacher.createId());
