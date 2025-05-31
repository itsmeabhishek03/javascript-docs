// 1) 1 st way to create a promise
const promiseOne = new Promise(function (resolve, reject) {
  // Promise is object that is used to handle asynchronous operations
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is compelete");
    resolve(); // resolve will connect the promise to the then block
    // reject("ERROR: Something went wrong"); // reject will connect the promise to the catch block
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 2) 2nd way to create a promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 3) 3rd way to create a promise
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Chai", email: "chai@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  // user is the resolved value
  console.log("our user", user);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 4) 4th way to create a promise
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // username is the resolved value from the previous then block
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 5) 5th way to create a promise with async/await
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

// promise.all
// yes this is also available, kuch reading aap b kro.
