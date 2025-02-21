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


//     let heading = document.querySelector(".heading");

// function log() {
//   let localName = localStorage.getItem("Name") ; 
//   heading.innerHTML = `Welcome ${localName}`;

//   setTimeout(() => {
//     location.href = "localhome.html";
//   }, 3000);

//   return true;
// }

// log(); 

// function logout() {
//   setTimeout(() => {
//     alert("You are logged out!");
//     localStorage.clear();
//     heading.innerHTML = "";
//     location.href = "index.html";
//     return true;
//   }, 5000);
// }

// logout(); 









// <--------------ANIMATION------------------>


window.onload = function () {
    VANTA.BIRDS({
      el: "#birds",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0xe0393b,
      color1: 0xf4f0f0,
      color2: 0xf2f2f2,
      wingSpan: 39.00,
      separation: 39.00,
      alignment: 25.00,
      cohesion: 34.00
    });
  };
  
// <-------------------------------->

// let loaddata=()=>{
//   let username=localStorage.getItem("Name")

//   if(username==null){
//  document.querySelector("#show").innerHTML="Firstly, Login to Crafted Journeys.......";
//   }
//   else{
//    document.querySelector("#show").innerHTML=`Welcome Back....${username}`;
//   }
//   return false;

// }