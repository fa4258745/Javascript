// let heading = document.querySelector(".heading");
// function log() {
//   let localName = localStorage.getItem("Name");
//   heading.innerHTML = `Welcome ${localName}`;
//   location.href = "localhome.html";
//   return true;
// }
// log();

// function logout() {
//   setTimeout(() => {
//     alert("You are logged out!");
//     localStorage.clear();
//     location.href = "index.html";
//     heading.innerHTML = "";
//     return true;
//   }, 5000);
// }

// logout();









// <----------------------------------------------------->


// document.addEventListener("DOMContentLoaded", function () {
    //     let heading = document.querySelector(".heading");

    //     function log() {
//         let localName = localStorage.getItem("Name") || "Guest"; // Fallback to "Guest" if Name is not in localStorage
//         heading.innerHTML = `Welcome ${localName}`;

//         // Show the message for 3 seconds, then hide it
//         setTimeout(() => {
    //             heading.innerHTML = "";  // Clear the heading
    //         }, 3000);
    //     }

    //     log(); // Call the log function to display the welcome message
    // });
    
    
    // <----------------------------------------------------->

// let heading = document.querySelector(".heading");

// function log() {
//   let localName = localStorage.getItem("Name") || "Guest"; // Default to "Guest"
//   heading.innerHTML = `Welcome ${localName}`;

//   // Hide the heading after 3 seconds
//   setTimeout(() => {
    //     heading.innerHTML = "";
    //   }, 3000);
    // }
    
    // log(); // Call the function immediately
    // <----------------------------------------------------->



    let heading = document.querySelector(".heading");

function log() {
  let localName = localStorage.getItem("Name") || "Guest"; // Ensure it never returns null
  heading.innerHTML = `Welcome ${localName}`;

  // Show the message for 3 seconds before redirecting
  setTimeout(() => {
    location.href = "localhome.html";
  }, 3000);

  return true;
}

log(); // Call log function

function logout() {
  setTimeout(() => {
    alert("You are logged out!");
    localStorage.clear();
    
    // Clear the heading before redirecting
    heading.innerHTML = "";

    location.href = "index.html";
    return true;
  }, 5000);
}

logout(); // Call logout function

