let gameNum = 10;
let EnterUser = parseFloat(prompt("Enter the number"));
if (gameNum === EnterUser) {
  alert("Congratulations");
} else if (EnterUser > 7 && EnterUser < 10) {
  prompt("try high ");
} else if (EnterUser > 11 && EnterUser < 20) {
  prompt("try lower ");
} else {
  alert("Gaiolme over");
}

// <----------------------------------->
// let gamenum = 10;
// let EnterNum = parseFloat(prompt("Enter the num"));
// if (EnterNum === gamenum) {
//   prompt("Congrats You Won");
// } else if (EnterNum !== gamenum) {
//   prompt("enter again");
//   if (EnterNum !== gamenum) {
//     prompt("try again");
//     if (EnterNum !== gamenum) {
//       alert("Game Over");
//     }
//   }
// }
