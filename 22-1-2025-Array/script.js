// string reverse oakindrome in CPP

// <---------------- Add from End------------------->

function add() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.push("Watermelon"));
  document.write(fruits);
}

// <----------------Remove from End------------------->
function del() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.pop());
  document.write(fruits);
}
// <----------------Remove from Start------------------->
function sift() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.shift());
  document.write(fruits);
}
// <----------------Add from Start------------------->
function unShift() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log(fruits.unshift("Pineapple"));
  document.write(fruits);
}

// <----------------- LENGTH --------------------->

function len() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  document.write(fruits.length);
}


// <-----------------ACCESS--------------------->
function access() {
  let fruits = ["Apple", "Orange", "Mango", "banana"];
  console.log((fruits[2] = "Pomegranate"));
  document.write(fruits);
}


// DAY-2
// <-----------------SLice & Splice--------------------->

function spliceSlice() {
  let fruits=["Apple","Orange","Mango","banana","grapes","kiwi","Strawberry"];
  // last value don't count
  document.write(fruits.slice(1,5));  //1,2
  
  // push pop spilce shift unshift 
  
  // document.write(fruits.splice(1,1,"Papaya")); //from where to add,how many to delete, what to add
}

// <--------- REVERSE--------->

function reverse(){
  let fruits=["Apple","Orange","Mango","banana"];
  document.write(fruits.reverse());
}

// <--------- DESCENDING --------->
function sort() {
  let fruits = [7,9,8,2,3,4,5,];
  document.write(fruits.sort().reverse());
}

// <--------- Ascending --------->
function ascending() {
  let fruits = [7,9,8,2,3,4,5,];
  document.write(fruits.sort());
}