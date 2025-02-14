let roll = () => {
  let dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);


  let boxes = ["#box1", "#box2", "#box3", "#box4", "#box5", "#box6"];
  let colors = ["red", "#0052D5", "#45a049", "#4B0082", "#029a84", "#e62780"];
  
  // Rotate dice button
  let diceBox = document.querySelector("#myboxes");
  
  // Ensure continuous rotation
  diceBox.style.transition = "transform 0.5s ease-in-out";
  
  diceBox.style.transform = `rotate(${(Math.random() * 360) + 360}deg)`;
  
  // Hide all boxes first
  boxes.forEach((box) => {
    document.querySelector(box).style.opacity = "0";
  });
  
  // Show the selected dice box
  let selectedBox = document.querySelector(boxes[dice - 1]);
  selectedBox.style.opacity = "1";
  selectedBox.style.backgroundColor = colors[dice - 1];
  selectedBox.style.boxShadow = `0px 0px 30px ${colors[dice - 1]}, 0px 0px 30px ${colors[dice - 1]}, 0px 0px 20px ${colors[dice - 1]}`;
  
  // Change button color


  let box1 = document.querySelector("#box1");
  let box2 = document.querySelector("#box2");
  let box3 = document.querySelector("#box3");
  let box4 = document.querySelector("#box4");
  let box5 = document.querySelector("#box5");
  let box6 = document.querySelector("#box6");
  let text =document.querySelector(".print");
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
     
  }
     else if (dice == 2) {
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





