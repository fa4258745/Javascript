let roll = () => {
  let dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);
  let box1 = document.querySelector("#box1");
  let box2 = document.querySelector("#box2");
  let box3 = document.querySelector("#box3");
  let box4 = document.querySelector("#box4");
  let box5 = document.querySelector("#box5");
  let box6 = document.querySelector("#box6");
  if (dice == 1) {
    box1.style.opacity = "1";
    box2.style.opacity = "0";
    box3.style.opacity = "0";
    box4.style.opacity = "0";
    box5.style.opacity = "0";
    box6.style.opacity = "0";
    box1.style.backgroundColor = "red";
    box1.style.boxShadow =
    "0px 0px 30px red, 0px 0px 30px red, 0px 0px 20px red";
    document.querySelector("#DICE").style.backgroundColor=" red";
  } else if (dice == 2) {
    box1.style.opacity = "0";
    box2.style.opacity = "1";
    box3.style.opacity = "0";
    box4.style.opacity = "0";
    box5.style.opacity = "0";
    box6.style.opacity = "0";
    box2.style.boxShadow =
      "0px 0px 30px #0052D5, 0px 0px 30px #0052D5, 0px 0px 30px #0052D5";
    box2.style.backgroundColor = "#0052D5";
    document.querySelector("#DICE").style.backgroundColor=" #0052D5";
  } else if (dice == 3) {
    box1.style.opacity = "0";
    box2.style.opacity = "0";
    box3.style.opacity = "1";
    box4.style.opacity = "0";
    box5.style.opacity = "0";
    box6.style.opacity = "0";
    box3.style.backgroundColor = "  #45a049";
    box3.style.boxShadow =
    "0px 0px 30px #45a049, 0px 0px 30px #45a049, 0px 0px 20px #45a049";
    document.querySelector("#DICE").style.backgroundColor=" #45a049";
  } else if (dice == 4) {
    box1.style.opacity = "0";
    box2.style.opacity = "0";
    box3.style.opacity = "0";
    box4.style.opacity = "1";
    box5.style.opacity = "0";
    box6.style.opacity = "0";
    box4.style.backgroundColor = "  #4B0082";
    box4.style.boxShadow =
    "0px 0px 30px #4B0082, 0px 0px 30px #4B0082, 0px 0px 20px #4B0082";
    document.querySelector("#DICE").style.backgroundColor="#4B0082";
  } else if (dice == 5) {
    box1.style.opacity = "1";
    box2.style.opacity = "0";
    box3.style.opacity = "0";
    box4.style.opacity = "0";
    box5.style.opacity = "1";
    box6.style.opacity = "0";
    box5.style.backgroundColor = "#029a84";
    box5.style.boxShadow =  "0px 0px 30px #029a84 , 0px 0px 30px #029a84, 0px 0px 20px #029a84";
    document.querySelector("#DICE").style.backgroundColor="#029a84";
  }
   else if (dice == 6) {
    box1.style.opacity = "0";
    box2.style.opacity = "0";
    box3.style.opacity = "0";
    box4.style.opacity = "0";
    box5.style.opacity = "0";
    box6.style.opacity = "1";
    box6.style.backgroundColor = "#e62780";
    box6.style.boxShadow =
      "0px 0px 30px #e62780, 0px 0px 30px #e62780, 0px 0px 20px #e62780";
      document.querySelector("#DICE").style.backgroundColor="#e62780";
  }
};
