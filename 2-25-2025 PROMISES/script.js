// <-----------PROMISES---------->
// Promise is for eventual task.It is an object in JS.
// It is a solution callback hell;

// let promise =new Promise ({reolve,reject}) //function with 2 handlers that is reolve and reject;

let promise = new Promise((resolve,reject)=> {
    console.log("Promise is created");
    resolve();
})