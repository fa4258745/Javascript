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

    // Reset previous errors
    errname.innerHTML = "";
    errnum.innerHTML = "";
    erremail.innerHTML = "";
    errpass.innerHTML = "";
    errcpass.innerHTML = "";

    let isValid = true;

    if (inpname === "") {
        errname.innerHTML = "Please enter the name";
        errname.style.color = "red";
        isValid = false;
    }

    if (inpemail === "") {
        erremail.innerHTML = "Please enter a valid email";
        erremail.style.color = "red";
        isValid = false;
    }

    if (inpnum === "" || isNaN(inpnum) || inpnum.length !== 10) {
        errnum.innerHTML = "Please enter a valid 10-digit number";
        errnum.style.color = "red";
        isValid = false;
    }

    if (inppass === "") {
        errpass.innerHTML = "Password cannot be empty";
        errpass.style.color = "red";
        isValid = false;
    } else if (inppass.length < 6) {
        errpass.innerHTML = "Password must be at least 6 characters";
        errpass.style.color = "red";
        isValid = false;
    }

    if (inpcpass === "") {
        errcpass.innerHTML = "Confirm password cannot be empty";
        errcpass.style.color = "red";
        isValid = false;
    } else if (inpcpass !== inppass) {
        errcpass.innerHTML = "Passwords do not match";
        errcpass.style.color = "red";
        isValid = false;
    }

    return isValid; // Only submit if all fields are valid
};
