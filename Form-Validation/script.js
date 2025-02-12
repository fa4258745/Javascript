let sub = () => {
  let inpname = document.querySelector("#name").value;
  let inpnum = document.querySelector("#number").value;
  let inpemail = document.querySelector("#email").value;
  let inppass = document.querySelector("#pass").value;
  let inpcpass = document.querySelector("#cpass").value;

  let errname = document.querySelector("#errname");
  let errnum = document.querySelector("#errnum");
  let erremail = document.querySelector("#erremail");
  let errpass = document.querySelector("#errpass");
  let errcpass = document.querySelector("#errcpass");


  let isValid = true;

  // Name validation
  if (inpname === "") {
    errname.innerHTML = "Please enter the name";
    errname.style.color = "red";
    let border = document.querySelector(".name");
    border.style.border = "2px solid red";
    // let place =document.querySelector("#name").placeholder="enter your name";
    isValid = false;
  }

  // Email validation
  if (inpemail === "") {
    erremail.innerHTML = "Please enter the email";
    erremail.style.color = "red";
    let border = document.querySelector(".email");
    border.style.border = "2px solid red";

    isValid = false;
  }
 
  else if (!(inpemail.includes("@") && inpemail.includes(".com"))) {
    erremail.innerHTML = "Please enter a valid email address";
    erremail.style.color = "red";
    isValid = false;
  }

  // Number validation
  if (inpnum === "") {
    errnum.innerHTML = "Please enter the number";
    errnum.style.color = "red";
    let border = document.querySelector(".number");
    border.style.border = "2px solid red";
    isValid = false;
  }

   else if (isNaN(inpnum)) {
    errnum.innerHTML = "Please enter a valid number";
    errnum.style.color = "red";
    isValid = false;
  }

   else if (inpnum.length !== 10) {
    errnum.innerHTML = "Please enter a valid phone number (10 digits)";
    errnum.style.color = "red";
    isValid = false;
  }

  // Password validation
  if (inppass === "") {
    errpass.innerHTML = "Please enter the Password";
    let border = document.querySelector(".password");
    border.style.border = "2px solid red";
    errpass.style.color = "red";
    isValid = false;
  }
  
  else if (
    !(
      inppass.match(/[0-9]/) &&
      inppass.match(/[!@#$%^&*()]/) &&
      inppass.match(/[a-z]/) &&
      inppass.match(/[A-Z]/)
    )
  ) {
    errpass.innerHTML = "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
    errpass.style.color = "red";
    isValid = false;
  }

  // Confirm Password validation
  if (inpcpass === "") {
    errcpass.innerHTML = "Please confirm your password";
    errcpass.style.color = "red";
    let border = document.querySelector(".confpass");
    border.style.border = "2px solid red";
    isValid = false;
  }

  else if (inpcpass !== inppass) {

    // let com=document.querySelector("#inppass").value.innerHTML="";
    
    errcpass.innerHTML = "Passwords do not match";
    errcpass.style.color = "red";
    let foc=  document.querySelector("#cpass").focus();
    isValid = false;
    let doc=document.querySelector("#cpass").value="";
  }

  return isValid;

};

