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
  errname.innerHTML = "";
  errnum.innerHTML = "";
  erremail.innerHTML = "";
  errpass.innerHTML = "";
  errcpass.innerHTML = ""
  
  let isValid = true;


  if (inpname === "") {
  errname.innerHTML = "Please enter the name";
  errname.style.color = "red";        isValid = false;

  }

  if (inpemail==="") {
    erremail.innerHTML="Please enter the email";
    erremail.style.color="red";
    isValid = false;

  }

  if (inpnum==="") {
    errnum.innerHTML="Please enter the number";
    errnum.style.color="red";
    isValid = false;
  }
  if (inppass==="") {
    errpass.innerHTML="Please enter the Password";
    errpass.style.color="red";
    isValid = false;
  }
  if (inpcpass==="") {
    errcpass.innerHTML="Confirm Password";
    errcpass.style.color="red";
    isValid = false;
  }

return isValid;

};

   // Reset previous errors
