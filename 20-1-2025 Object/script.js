// object = key value

// let ok =['nope', 'hello',34]
// console.log(ok[0]);

// // object key name cant be the same as key value
// let obj = {
//   name: "Sid",
//   age: 23,
//   country: "India",
//   hobbies: ["reading", "coding", "gaming"],
//   greeting: function () {
//     console.log(` hello im ${this.name} and I'm ${this.age} years old`);
//   },
// };
// obj.greeting();
// // It will override the age if it is written down the function call

// obj.age=25;

// obj.hobbies = "dancing"; // to update the key
// // console.log(obj.name); // to access the value of the key name
// console.log(obj); //to see full object

// obj.name = "Siddharth";

// delete obj.hobbies; // to delete the key

// console.log(obj.hobbies[0]);
// <------------------DESTRUCTURING------------------->
// const student =  {
//     name: "David",
//     age: 25,
//     country: "India",
//     hobbies: ["reading", "coding", "gaming"],

// }

// function destruct() {
//   const {name,age} =student;
//   console.log(name);
//   console.log(age);

// }

// <--------------SPread------------>
function spr() {
  const student1 = { name: "David", age: 25 };
  const student2 = { city: "New york", country: "USA" };

  const mergedStudent = { ...student1, ...student2 };
  console.log(mergedStudent);
}





// Anonymouse fucntion
let go = function () {
  console.log("Anonymouse fucntion");
};

go();
// IIFE === imediately invoke function expresssion

(
  function () {
  console.log("IIFE");
}
)();

//<-------------- Arrow function-------------->
let arrow = () => {
  console.log("Arrow function");
};
arrow();


