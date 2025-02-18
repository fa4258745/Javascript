let login = () => {
let username= document.querySelector(".username").value;

  localStorage.setItem("Name", username);
  localStorage.setItem("Age", "25");
  localStorage.setItem("Email", "fa42");
  location.reload();
  location.href("http://goggle.com/");
};

// localStorage.getItem("Name","Faraz");

let display = document.querySelector("#display");
let display1 = document.querySelector("#display1");
display.innerHTML = localStorage.getItem("Name");
display1.innerHTML = localStorage.getItem("Age");

let logout = () => {
  localStorage.removeItem("Name");
  localStorage.removeItem("Age");
  location.reload();
};
