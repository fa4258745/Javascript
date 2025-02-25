// <***********--------FETCH API--------*******>
// API=>Application Programming Interface
// The Fetch API provides an interface for fetching (sending/receiving) resources
// It uses Requests and Response objects
//The fetch() method is used to fetch a resource (data).
// let promise = fetch (url,[options])

const URL ="https://api.thecatapi.com/v1/images/0XYvRd7oD";

const getFacts = async()=> {
    console.log("Inside getFacts"); 
let promise=await fetch(URL);
console.log(promise);


}