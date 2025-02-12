function dice() {
  let ran = Math.floor(Math.random() * 6 + 1);
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  let div3 = document.querySelector(".div3");
  let div4 = document.querySelector(".div4");
  let div5 = document.querySelector(".div5");
  let div6 = document.querySelector(".div6");
  let div7 = document.querySelector(".div7");
  let div8 = document.querySelector(".div8");
  let div9 = document.querySelector(".div9");

  if (ran == 1) {
    div1.style.opacity = "0";
    div2.style.opacity = "0";
    div3.style.opacity = "0";
    div4.style.opacity = "0";
    div5.style.opacity = "1";
    div6.style.opacity = "0";
    div7.style.opacity = "0";
    div8.style.opacity = "0";
    div9.style.opacity = "0";
    document.querySelector(".hell").innerHTML = "Roll the Dice";
  } 
  
  else if (ran == 2) {
    div1.style.opacity = "0";
    div2.style.opacity = "1";
    div3.style.opacity = "0";
    div4.style.opacity = "0";
    div5.style.opacity = "0";
    div6.style.opacity = "0";
    div7.style.opacity = "0";
    div8.style.opacity = "1";
    div9.style.opacity = "0";
    document.querySelector(".hell").innerHTML = "Roll the Dice";
  } 
  
  else if (ran == 3) {
    div1.style.opacity = "1";
    div2.style.opacity = "0";
    div3.style.opacity = "0";
    div4.style.opacity = "0";
    div5.style.opacity = "1";
    div6.style.opacity = "0";
    div7.style.opacity = "0";
    div8.style.opacity = "0";
    div9.style.opacity = "1";
    document.querySelector(".hell").innerHTML = "Roll the Dice";
  } else if (ran == 4) {
    div1.style.opacity = "1";
    div2.style.opacity = "0";
    div3.style.opacity = "1";
    div4.style.opacity = "0";
    div5.style.opacity = "0";
    div6.style.opacity = "0";
    div7.style.opacity = "1";
    div8.style.opacity = "0";
    div9.style.opacity = "1";
    document.querySelector(".hell").innerHTML = "Roll the Dice";
  } else if (ran == 5) {
    div1.style.opacity = "1";
    div2.style.opacity = "0";
    div3.style.opacity = "1";
    div4.style.opacity = "0";
    div5.style.opacity = "1";
    div6.style.opacity = "0";
    div7.style.opacity = "1";
    div8.style.opacity = "0";
    div9.style.opacity = "1";
    document.querySelector(".hell").innerHTML = "Roll the Dice";
  } else {
    div1.style.opacity = "1";
    div2.style.opacity = "1";
    div3.style.opacity = "1";
    div4.style.opacity = "0";
    div5.style.opacity = "0";
    div6.style.opacity = "0";
    div7.style.opacity = "1";
    div8.style.opacity = "1";
    div9.style.opacity = "1";

    document.querySelector(".hell").innerHTML = "Congratulations You Won";
  // document.querySelector("body").style.backgroundColor="aqua";

 
  }
}

function reset() {
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  let div3 = document.querySelector(".div3");
  let div4 = document.querySelector(".div4");
  let div5 = document.querySelector(".div5");
  let div6 = document.querySelector(".div6");
  let div7 = document.querySelector(".div7");
  let div8 = document.querySelector(".div8");
  let div9 = document.querySelector(".div9");
  let hell = document.querySelector(".hell");
  div1.style.opacity = "0";
  div2.style.opacity = "0";
  div3.style.opacity = "0";
  div4.style.opacity = "0";
  div5.style.opacity = "0";
  div6.style.opacity = "0";
  div7.style.opacity = "0";
  div8.style.opacity = "0";
  div9.style.opacity = "0";
  hell.innerHTML = "Roll the Dice";
}


