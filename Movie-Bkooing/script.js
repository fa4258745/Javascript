let sana = () => {
  let signname = document.querySelector("#signName").value;
  let signemail = document.querySelector("#signEmail").value;
  let signNumber = document.querySelector("#signNumber").value;
  let signPassword = document.querySelector("#signPassword").value;
  let confirmPassword = document.querySelector("#signConfirmPassword").value;

  let errName = document.querySelector(".errName");
  let errEmail = document.querySelector(".errEmail");
  let errNumber = document.querySelector(".errNumber");
  let errPassword = document.querySelector(".errPassword");
  let errConfirmPassword = document.querySelector(".errConfirmPassword");

  
  // console.log("Saving to Local Storage:", signname, signPassword);

  // ✅ Clear all previous error messages
  errName.innerHTML = "";
  errEmail.innerHTML = "";
  errNumber.innerHTML = "";
  errPassword.innerHTML = "";
  errConfirmPassword.innerHTML = "";

  if (signname == "") {
    errName.innerHTML = "Enter your name";
    document.querySelector("#signName").style.border = "1px solid #fff";
    return false;
  }

  if (!(signemail.includes("@") && signemail.includes(".com"))) {
    errEmail.innerHTML = "Add @ or .com";
    errEmail.style.color = "white";
    return false;
  }

  if (signemail == "") {
    errEmail.innerHTML = "Enter your email address";
    errEmail.style.color = "white";
    document.querySelector("#signEmail").style.border = "1px solid #fff";
    return false;
  }

  if (signNumber == "") {
    errNumber.innerHTML = "Enter your phone number";
    errNumber.style.color = "white";
    document.querySelector("#signNumber").style.border = "1px solid #fff";
    return false;
  }

  if (signNumber.length !== 10) {
    errNumber.innerHTML = "Please enter a 10-digit number";
    errNumber.style.color = "white";
    document.querySelector("#signNumber").style.border = "1px solid #fff";
    return false;
  }

  // Password validation
  if (signPassword == "") {
    errPassword.innerHTML = "Enter your password";
    errPassword.style.color = "white";
    document.querySelector("#signPassword").style.border = "1px solid #fff";
    return false;
  }

  if (
    !(
      signPassword.match(/[0-9]/) &&
      signPassword.match(/[!@$%^&*()]/) &&
      signPassword.match(/[a-z]/) &&
      signPassword.match(/[A-Z]/)
    )
  ) {
    errPassword.innerHTML =
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
    document.querySelector("#signPassword").style.border = "1px solid #fff";
    return false;
  }

  if (confirmPassword == "") {
    errConfirmPassword.innerHTML = "Enter your confirm password";
    errConfirmPassword.style.color = "white";
    document.querySelector("#signConfirmPassword").style.border = "1px solid #fff";
    return false;
  }

  if (signPassword != confirmPassword) {
    errConfirmPassword.innerHTML = "Passwords do not match";
    errConfirmPassword.style.color = "white";
    document.querySelector("#signConfirmPassword").style.border = "1px solid #fff";
    document.querySelector("#signConfirmPassword").focus();
    return false;
  }

  localStorage.setItem("Name",signname)
  localStorage.setItem("Number",signNumber)
  localStorage.setItem("Email",signemail)
  localStorage.setItem("Password",signPassword)

  location.href="localhome.html";
 return false;

  // return true;
};
