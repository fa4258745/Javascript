// dom is tree like structure of an HTML
// where js can enter an can change any tag and content
function DOM() {
  // ELEMENT BY ID
  let show = document.getElementById("params"); //target id of the element
  show.innerHTML = "hello world"; // add hello world to document
  show.style.color = "green";
  show.style.fontFamily = "Helvetica";
  show.style.fontSize = "30px";
  show.style.textTransform = "uppercase";
  

  // QUERY SELECTOR -> target classes and id both
  let show2 = document.querySelector(".para"); // target the class
  show2.innerHTML = "Bye World";
  show2.style.color = "red";


  let show3 = document.querySelector("#parameter") 
  show3.innerHTML = "live to your fullest";
  show3.style.color = "purple";
  show3.style.fontSize = "30px";
  

  let show4 = document.getElementsByClassName("parameter") 
  show4.innerHTML = "live to your fullest";
  show4.style.color = "purple";
  show4.style.fontSize = "100px";
}

function BGcolor() {
  let bgcahnge= document.querySelector("#main");
  bgcahnge.style.backgroundColor = "blue";
}

function FGcolor() {
  let colorRed= document.querySelector("#main");
  // colorRed.style.backgroundColor = "red";
  colorRed.style.backgroundImage="url('https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg')";
  
}
function Reset() {
  let colorRed= document.querySelector("#main");
  colorRed.style.backgroundColor = "white";
  colorRed.style.backgroundImage="none";
}

