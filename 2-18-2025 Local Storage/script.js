let login = () => {
  let username = document.querySelector(".username").value;
  let email = document.querySelector(".email").value;
  let number = document.querySelector(".number").value;

  localStorage.setItem("Name", username);
  localStorage.setItem("Email",email);
  localStorage.setItem("Age", number);
  location.reload();
  location.href("http://goggle.com/");
};

// localStorage.getItem("Name","Faraz");

let display = document.querySelector("#display");
// let display1 = document.querySelector("#display1");
// let display2 = document.querySelector("#display2");

display.innerHTML=(`${localStorage.getItem("Name")} ${localStorage.getItem("Email")}  ${localStorage.getItem("Age")}`);



// display.innerHTML = localStorage.getItem("Name");
// display2.innerHTML = localStorage.getItem("Email");
// display1.innerHTML = localStorage.getItem("Age");

let logout = () => {
  localStorage.removeItem("Name");
  localStorage.removeItem("Age");
  location.reload();
};
