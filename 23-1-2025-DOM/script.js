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
  
}
