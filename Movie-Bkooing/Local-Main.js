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


// window.onload = function () {
//     VANTA.BIRDS({
//       el: "#birds",
//       mouseControls: true,
//       touchControls: true,
//       gyroControls: false,
//       minHeight: 200.00,
//       minWidth: 200.00,
//       scale: 1.00,
//       scaleMobile: 1.00,
//       backgroundColor: 0xe0393b,
//       color1: 0xf4f0f0,
//       color2: 0xf2f2f2,
//       wingSpan: 39.00,
//       separation: 39.00,
//       alignment: 25.00,
//       cohesion: 34.00
//     });
//   };

// <--------------RED NET------------>
// window.onload = function () {
//   VANTA.NET({
//     el: "#birds",
//     mouseControls: true,
//     touchControls: true,
//     gyroControls: false,
//     minHeight: 200.00,
//     minWidth: 200.00,
//     scale: 1.00,
//     scaleMobile: 1.00,
//     color: 0xff0000,
//     backgroundColor: 0x0,
//     points: 12.00
//   })
// }

// <--------------BLACK & WHITE NET------------>
VANTA.NET({
  el: "#birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x0,
  points: 12.00
})
  
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


// <--------------------SWIPER JAVASCRIPT-------------------->

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });




const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".swiperFirst", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});



// <----------------------SWIPER JAVASCRIPT----------------------->

var swiper = new Swiper(".swiperSecond", {
  slidesPerView: 5,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});




VANTA.BIRDS({
  el: "#birds1",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  color1: 0xffffff
})