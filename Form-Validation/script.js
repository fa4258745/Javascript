// let sub = () => {
//   let inpname = document.querySelector("#name").value;
//   let inpnum = document.querySelector("#number").value;
//   let inpemail = document.querySelector("#email").value;
//   let inppass = document.querySelector("#pass").value;
//   let inpcpass = document.querySelector("#cpass").value;

//   let errname = document.querySelector("#errname");
//   let errnum = document.querySelector("#errnum");
//   let erremail = document.querySelector("#erremail");
//   let errpass = document.querySelector("#errpass");
//   let errcpass = document.querySelector("#errcpass");

//   errname.innerHTML = "";
//   errnum.innerHTML = "";
//   erremail.innerHTML = "";
//   errpass.innerHTML = "";
//   errcpass.innerHTML = "";

//   let isValid = true;

//   if (inpname === "") {
//     errname.innerHTML = "Please enter the name";
//     errname.style.color = "red";
//     input.value.style.border = "1px solid red";
//     isValid = false;
//   }

//   if (inpemail === "") {
//     erremail.innerHTML = "Please enter the email";
//     erremail.style.color = "red";
//     isValid = false;
//   } else if (!(inpemail.includes("@") && inpemail.includes(".com"))) {
//     erremail.innerHTML = "Please enter a valid email address";
//     erremail.style.color = "red";
//     isValid = false;
//   }

//   if (inpnum === "") {
//     errnum.innerHTML = "Please enter the number";
//     errnum.style.color = "red";
//     isValid = false;
//   } else if (isNaN(inpnum)) {
//     errnum.innerHTML = "Please enter a valid number";
//     errnum.style.color = "red";
//     isValid = false;
//   } else if (inpnum.length != 10) {
//     errnum.innerHTML = "Please enter a valid phone number (10 digits)";
//     errnum.style.color = "red";
//     isValid = false;
//   }

//   if (inppass === "") {
//     errpass.innerHTML = "Please enter the Password";
//     errpass.style.color = "red";
//     isValid = false;
//   }

//    else if (
//     !(
//       inppass.match(/[1234567890]/) &&
//       inppass.match(/[!@#$%^&*()]/) &&
//       inppass.match(/[a-z]/) &&
//       inppass.match(/[A-Z]/)
//     )
//   ) {
//     errpass.innerHTML = "Please enter Strong Password";
//     errpass.style.color = "red";
//     isValid = false;
//   }

//   if (inpcpass === "") {
//     errcpass.innerHTML = "Please confirm your password";
//     errcpass.style.color = "red";
//     isValid = false;
//   }
//   else if (inpcpass !== inppass) {
//     errcpass.innerHTML = "Please do not watch";
//     errcpass.style.color = "red";
//     isValid = false;
//   }

//   return isValid;
// };




let sub = () => {
  let inpname = document.querySelector("#name").value.trim();
  let inpnum = document.querySelector("#number").value.trim();
  let inpemail = document.querySelector("#email").value.trim();
  let inppass = document.querySelector("#pass").value.trim();
  let inpcpass = document.querySelector("#cpass").value.trim();

  let errname = document.querySelector("#errname");
  let errnum = document.querySelector("#errnum");
  let erremail = document.querySelector("#erremail");
  let errpass = document.querySelector("#errpass");
  let errcpass = document.querySelector("#errcpass");

  // Clear previous error messages
  errname.innerHTML = "";
  errnum.innerHTML = "";
  erremail.innerHTML = "";
  errpass.innerHTML = "";
  errcpass.innerHTML = "";

  let isValid = true;

  // Name validation
  if (inpname === "") {
    errname.innerHTML = "Please enter the name";
    errname.style.color = "red";
    let border = document.querySelector(".name");
    border.style.border = "2px solid red";
  
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
  // } else if (!inpemail.includes("@") || !inpemail.endsWith(".com")) {
  //   erremail.innerHTML = "Please enter a valid email address";
  //   erremail.style.color = "red";

  //   isValid = false;
  // }
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
  } else if (isNaN(inpnum)) {
    errnum.innerHTML = "Please enter a valid number";
    errnum.style.color = "red";
    isValid = false;
  } else if (inpnum.length !== 10) {
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
  } else if (
    !(
      inppass.match(/[0-9]/) &&
      inppass.match(/[!@#$%^&*()]/) &&
      inppass.match(/[a-z]/) &&
      inppass.match(/[A-Z]/)
    )
  ) {
    errpass.innerHTML =
      "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character";
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
  } else if (inpcpass !== inppass) {
    errcpass.innerHTML = "Passwords do not match";
    errcpass.style.color = "red";
    isValid = false;
  }

  return isValid;
};
