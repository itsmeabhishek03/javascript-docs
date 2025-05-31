// function setUsername(username){{
//      this.username = username;
// }}

function setUsername(username) {
  this.username = username;
}

function createuser(username, email, id) {
  //setUsername(username); // This will not work because 'this' is not set to the new object, therfore it will loose the context in call stack
  setUsername.call(this, username); // Using call to set 'this' to the current context, basically now it will give its context to the function
  this.email = email;
  this.id = id;
}

const user = new createuser("abhishek", "abhishek@gmail.com", 1);
console.log(user);
