// object = key value

// let ok =['ok', 'hello',34]
// console.log(ok[0]);

// object key name cant be the same as key value 
let obj = {
  name: "Sid",
  age: 23,
  country: "India",
  hobbies: ["reading", "coding", "gaming"],

  greeting: function () {
    console.log(` hello im ${this.name} and I'm ${this.age} years old`);
  },
};
obj.greeting();

obj.hobbies = "dancing"; // to update the key
// console.log(obj.name); // to access the value of the key name
console.log(obj); //to see full object

// obj.name = "Siddharth";

delete obj.hobbies; // to delete the key

console.log(obj.hobbies[0]);
