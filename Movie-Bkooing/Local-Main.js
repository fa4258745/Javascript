









    
    
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












VANTA.NET({
  el: "#birds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 100.00,
  minWidth: 100.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xffffff,
  backgroundColor: 0x0,
  points: 13.00,
  maxDistance: 10.00,
  spacing: 16.00
})



// <-------------------------------->

let loaddata=()=>{
  let username=localStorage.getItem("Name")

  if(username==null){
 document.querySelector("#show").innerHTML="Firstly, Login to Crafted Journeys.......";
  }
  else{
   document.querySelector("#show").innerHTML=`Welcome Back....${username}`;
  }
  return false;

}


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
  color1: 0xffcfcf,
  color2: 0xffffff,
  wingSpan: 32.00,
  speedLimit: 3.00,
  separation: 42.00,
  alignment: 44.00,
  cohesion: 49.00,
  quantity: 3.00
})

const sidebar = () => {
  let side = document.querySelector(".sidebar");
  
  if (side) {
    side.style.display = side.style.display === "none" ? "block" : "none";
  } else {
    console.error("Sidebar element not found");
  }
};

// Ensure the function is globally accessible
window.sidebar = sidebar;




VANTA.WAVES({
  el: "#wave",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x0,
  shininess: 64.00,
  waveHeight: 10.50,
  waveSpeed: 0.70,
  zoom: 1.01
})