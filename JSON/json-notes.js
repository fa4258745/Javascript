// JSON (JavaScript Object Notation) is a lightweight data format used for storing and exchanging data. It is widely used in web development, especially for sending and receiving data between a server and a client.
// Key Points About JSON
// Format: JSON is a text-based format that follows JavaScript object syntax but is language-independent.
// Structure: Data is stored as key-value pairs.
// Uses: Commonly used for APIs, configuration files, and data exchange in web applications.

// <------<-----***** FETCH METHOD ****------>----->
// by default its nature is to get the data from the server
// if we want to post the data to the server we have to pass the second argument
//  to the fetch function....
// fetch() is used to retrieve data from a server.
// await ensures we wait for the response before moving forward.
// res.json() converts raw data into a JavaScript-friendly format
// The final data variable holds an array of movie objects.

// Step	Code Action
// 1️⃣	let url = "http://localhost:3000/movie";	Set API URL
// 2️⃣	let res = await fetch(url);	Send GET request
// 3️⃣	console.log(res);	Log response metadata
// 4️⃣	let data = await res.json();	Convert response to JSON
// 5️⃣	console.log(data);	Log the movie data
// 6️⃣	fetchData();	Call function to execute

// <------<-----***** FETCH METHOD ****------>----->
// FETCH METHODS=> 1.get 2.post 3.delete 4.put(update.edit)
// Fetch is used to make HTTP requests to APIs or servers and get data
// Fetch works asynchronously and returns a promise

// <------<-----***** AYSNC<=>AWAIT ****------>----->
// Async/Await makes asynchronous code look like synchronous improving readibility
// It is a modern way to handle synchronous code
// ASYNC=>declares a function as aynchronous
// AWAIT=>pauses the function exection until the promise resolve or rejects


// <------<-----***** PROMISES ****------>----->
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
  
// <------<-----***** DB.JSON ****------>----->
// i.Install JSON Server
// npm install -g json server content
// EXAMPLES=> 1.
// {
//   "students" : [
//     {
//       "name": "Alice Smith",
//       "age": 20,
//       "genre": "Comedy",
//       "price": 5,
//       "person": 1

//     }

