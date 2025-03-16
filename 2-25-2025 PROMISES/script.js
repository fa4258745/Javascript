// <-----------PROMISES---------->
// Promise is for eventual task.It is an object in JS.
// It is a solution callback hell;

// let promise =new Promise ({reolve,reject}) //function with 2 handlers that is reolve and reject;

// let promise = new Promise((resolve,reject)=> {
//     console.log("Promise is created");
//     resolve();
// })


// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation. It helps avoid callback hell and makes asynchronous code more readable and manageable.

// States of a Promise
// A Promise has three states:
// 1. Pending – The initial state, before the operation completes.
// 2. Fulfilled – The operation was successful.
// 3. Rejected – The operation failed.

// Creating a Promise
// A Promise is created using the Promise constructor, which takes a 
// function with two parameters: resolve and reject.

const myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Operation Successful!"); // Fulfilled
    } else {
      reject("Operation Failed!"); // Rejected
    }
  }, 2000);
});
