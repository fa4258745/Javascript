// string reverse oakindrome in cPP

// <---------------- Add from End------------------->

function add() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.push("Watermelon"));
  console.log(fruits);
}

// <----------------Remove from End------------------->
function del() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.pop());
  console.log(fruits);
}
// <----------------Remove from Start------------------->
function sift() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.shift());
  console.log(fruits);
}
// <----------------Add from Start------------------->
function unShift() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.unshift("Pineapple"));
  console.log(fruits);
}

// <-----------------LENGTH & ACCESS--------------------->

function len() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.length);
}

function access() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log((fruits[2] = "Pomegranate"));
  console.log(fruits);
}
