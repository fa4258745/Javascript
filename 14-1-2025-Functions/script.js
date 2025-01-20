function add() {
  var a = 10;
  var b = 1;
  console.log(a + b);
}


function sub() {
  var a = 22;
  var b = 10;
  console.log(a + b);
}

function mul() {
  var a = 30;
  var b = 100;
  console.log(a + b);
}

// add();
// sub();
// mul();

// hoisting dont work in let const but supprt in var


// var is function scope
// let and const is block scope

// let var const difference
//Hoisting is where we print first but declare later

//   int main(){

//     return 0;
//   }

// function okk(){

//   console.log("First");

// }
// function go() {
  // let a
  // let  const
  // Declare
  // var a=5;
  // var a=7;
  // console.log(a);
  // let a=5
  // let a=6
  // reassign
  // var a=15;
  //   a=20; // reassign
  // console.log(a);
  // let a=18;
  // a=20
  // console.log(a);
  // const a=13;
  // a=15;
  // console.log(a);
  //  let a=20;
  //  {
  //    let a=25
  //      console.log("Inner"+a);
  //  }
  //  console.log("Outer"+a);
  // Hoisting
  //  console.log(a);
  //  var a=56;
}
go();
// okk();

const arrow=(a,b) => {
console.log(a+b);
}