// The variable arrOf is an array of objects in JavaScript.

// An array of objects is a data structure in JavaScript (and many other programming languages) where an array holds multiple objects. Each object can have properties (key-value pairs) and methods.
// let arrOf = [
//   {
//     name: "Siddharth",
//     age: 26,
//   },
//   {
//     name: "Faraz",
//     age: 25,
//   },
//   {
//     name: "Chloe",
//     age: 10,
//   },
// ];

// console.log(arrOf);
// console.log(arrOf.length)
// console.log(arrOf[2].name)
// console.log(arrOf[1].age)

// <---------Map Filter ForEach----------------->
// map method iterates over all the elements in the map and returns a new
// array containing  all the elements that match the filter. It does not modify the original array.

// let arr=[1,2,3,4,5];
// let ans = arr.map((e)=> {
//  return e*2;
// })
// console.log(ans);

// MAP doesn't change the original array
// THis arrow function used to calculate short calculation or to perform short operations
// let arr1 = [1, 2, 3, 4, 5];
// let ans1 = arr1.map((e) => e * 2);
// console.log(ans1);

// useful when one liner of less code is used to filter elements
// let arr22 = [1, 2, 3, 4, 5];
// let ans2 = arr22.map((e) => {
//    return e <2
// });
// console.log(ans2);

// <------------FILTER METHOD--------------->
// .filter() method creates a new array containing only the elements that satisfy a given condition.
// It does not modify the original array.
// Used for removing unwanted elements based on conditions.

// let arr2 = [1, 2, 3, 4, 5,6];
// let fil = arr2.filter((e) => {
//    return e%2==0;
// });
// console.log(fil);

// <------------odd--------------->

// let arr2 = [1, 2, 3, 4, 5];
// let fil = arr2.filter((e) => {
//   return  e%2!=0;
// });
// console.log(fil);

// <------------FOR EACH---------------->
// .forEach() method is used to iterate over an array and execute a function for each element. However, unlike .map() or .filter(), 
// it does not return a new array—it just executes the callback function on each item.
// Can change original array

// let arr3 = [1, 2, 3, 4, 5];
// arr3.forEach((e) => {
//   console.log(e * 2);
// });

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 }
// ];

// users.forEach(user => {
//   console.log(`${user.name} is ${user.age} years old.`);
// });


// <------------REDUCE METHOD--------------->
// .reduce() method in JavaScript is used to reduce an array to a single value by applying a function on each element of the array. It is commonly used for summing values, finding maximum/minimum, flattening arrays, and more.

// let arr4 = [1, 2, 3, 4, 5];

// let sum = arr4.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);

// <------------SORT METHOD--------------->

// .sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable (i.e., some elements may have their relative order changed by the sort).

// let arr5 = [1, 10, 2, 5, 3];

// arr5.sort((a, b) => {A

let students = [
  {
    name: "Siddharth",
    age: 25,
    city: "bhopal",
    grade: "A",
    marks: 80,
    address: "201 avenue Street",
  },
  {
    name: "Faraz",
    age: 25,
    city: "indore",
    grade: "A",
    marks: 100,
    address: "201 avenue Street",
  },
  {
    name: "SId",
    age: 30,
    city: "bhopal",
    grade: "C",
    marks: 40,
    address: "201 avenue Street",
  },
  {
    name: "John",
    age: 45,
    city: "bhopal",
    grade: "B",
    marks: 60,
    address: "201 avenue Street",
  },
  {
    name: "Sana",
    age: 26,
    city: "indore",
    grade: "A",
    marks: 85,
    address: "201 avenue Street",
  },
  {
    name: "Shriya",
    age: 28,
    city: "bhopal",
    grade: "A",
    marks: 95,
    address: "201 avenue Street",
  },
];

let display = document.querySelector("#display");

// students.map((e) => {
//   display.innerHTML += `<div>
//   <h1 id="design">Name=${e.name}  </h1>
//   <h2 id="design">Age=${e.age}</h2>
//   <h3 id="design"> City=  ${e.city}</h3>
//   </div>`;
// });

students.map((e) => {
  display.innerHTML += `<table>
  <td id="design">${e.name}  </td> 
  <td id="design"> ${e.age}</td>
  <td id="design">  ${e.city}</td>
  <td id="design" > ${e.grade} </td>
  <td id="design">  ${e.marks} </td>
  <td id="design">  ${e.address} </td>
  </table>`;
});
