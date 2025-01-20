// parseInt it dosen't show value of point 0
// Number   it do both things
// parseFloat it gives in point value also

// <------Arrow Function------->
// function add=()=> {

// }

// function hello() {
//   let a = parseFloat(prompt("enter num"));
//   let b = parseFloat(prompt("enter 2nd num"));
//   let total = a + b;
//   prompt("total is " + total);
// };

// hello();

// Q1  to check age
function age() {
  let num = prompt("enter a number");
  alert((num>=18?"eligible":"not eligible"));
}

// Q.2 Ask the user if they completed the course and have certificate by confirm

function certificate() {
  let course = confirm("are you completed the course");
  let certificate = confirm("are you completed the course");
  if (course === true && certificate === true) {
    alert("completed");
  } else {
    alert("not completed");
  }
}
//Q.3 Ask the user for the price of item and(Confirm) whether they have a discount coupon;

function price() {
  let price =prompt("enter price");
  let coupon =confirm("do you have disocunt coupon");
  if(coupon==true) {
    let discount=Number(price*10/100);
    let finalPrice=price-discount;
    alert("final price is "+finalPrice);
  }
  else {
    alert("you don't have coupon");
  }
}

// Q.4 Ask the user for their exam score and determine if they passed or failed(Above 30 pass);

function mark() {
  let marks = prompt("enter marks");
  if (marks > 33) {
    alert("pass");
  } else {
    alert("failed");
  }
}

//Q-5 TO find even odd
function even() {
  let num = prompt("enter a number");
  if (num % 2 == 0) {
    alert("number is even");
  } else {
    alert("number is odd");
  }
}

// Q.6 As for confirmation "Are you sure to delete" if  ok give message "item deleted otherwise" cancelled
function Delete() {
  let a = confirm("are you sure to delete?");
  if (a === true) {
    alert("item deleted");
  } else {
    alert("cancelled");
  }
}

// Q7 Check Entered number is Positive or Negative
function negNumber() {
  let num = prompt("enter a number");
  if (num > 0) {
    console.log("positive number");
  } else {
    console.log("negative number");
  }
}

//8 print 1 to 10 in console by while loop;
function numberprint() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

//Q.9 Keep asking the user input until the user enter num greater than 10;

function greater() {
  let num;
  do {
    num = prompt("Enter num");
    // num = parseFloat(num);
  } while (num <= 10);
  alert("Number is greater than 10");
}

// Q 10 Print number of days in week;
function days() {
  let DayNum = prompt("Enter num of days");
  DayNum=Number(DayNum);
  switch (DayNum) {
    case 1:
      alert("Monday");
      break;
    case 2:
      alert("Tuesday");
      break;
    case 3:
      alert("Wednesday");
      break;
    case 4:
      alert("Thursday");
      break;
    case 5:
      alert("Friday");
      break;
    case 6:
      alert("Saturday");
      break;
    case 7:
      alert("Sunday");
      break;
    default:
      console.log("invalid number of days");
  }
}

function sid() {
  let ans =Number(prompt("Enter the price"));
  let cons = confirm("do you have any discount")
  if(cons) {
    alert(ans*0.9)
  }
  else {
    alert(ans)
  }
}

function days3() {
  let prom=Number(prompt("enter the number"));
  switch(prom) {
    case 1: {
      alert("Monday");
      break;
    }
    case 2: {
      alert("Tuesday");
      break;
    }
    case 3: {
      alert("Wednesday");
      break;
    }
    case 4: {
      alert("Thursday");
      break;
    }
    case 5: {
      alert("Friday");
      break;
    }
    case 6: {
      alert("Saturday");
      break;
    }
    case 7: {
      alert("Sunday");
      break;
    }
    default: {
      alert("Invalid num")
    }

  }

}