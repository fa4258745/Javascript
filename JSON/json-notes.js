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
// Async/Await makes asynchronous code look like synchronous 
// code for better readibility
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

//     },

//     {
//       "name": "John Doe",
//       "age": 25,
//       "genre": "Action",
//       "price": 10,
//       "person": 2
//     }
//   ]
// }
// 3.start json server
//
