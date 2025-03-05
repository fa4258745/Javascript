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
  minHeight: 100.0,
  minWidth: 100.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0xffffff,
  backgroundColor: 0x0,
  points: 13.0,
  maxDistance: 10.0,
  spacing: 16.0,
});

// <-------------------------------->

let loaddata = () => {
  let username = localStorage.getItem("Name");

  if (username == null) {
    document.querySelector("#show").innerHTML =
      "Firstly, Login to Crafted Journeys.......";
  } else {
    document.querySelector("#show").innerHTML = `Welcome Back....${username}`;
  }
  return false;
};

// <--------------------SWIPER JAVASCRIPT-------------------->

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".swiperFirst", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

// <----------------------SWIPER JAVASCRIPT----------------------->

var swiper = new Swiper(".swiperSecond", {
  slidesPerView: 5,
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

VANTA.BIRDS({
  el: "#birds1",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0x0,
  color1: 0xffcfcf,
  color2: 0xffffff,
  wingSpan: 32.0,
  speedLimit: 3.0,
  separation: 42.0,
  alignment: 44.0,
  cohesion: 49.0,
  quantity: 3.0,
});






let sidebar = () => {
  // document.querySelector(".sidebar").style.display = "block";
  document.querySelector(".sidebar").style.opacity = 1;
  document.querySelector(".sidebar").style.left = 0;
  
};
let sidebarClose = () => {
  // document.querySelector(".sidebar").style.display = "none";
  document.querySelector(".sidebar").style.opacity = 0;
  document.querySelector(".sidebar").style.left = -380;
};
sidebar();
sidebarClose();
// <---------------------- FOR LOGUT THE PAGE----------------------->

let booknow=()=>{
        
  alert("Booknow")


}

// let logout = (id) => {
//         location.href = "index.html";
//         localStorage.clear();
// }


let logout = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout!"
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        title: "Logged Out!",
        text: "You have been successfully logged out.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500
      });

      setTimeout(() => {
        location.href = "index.html";
      }, 1500);
    }
  });
};

// <----------------------SMOOTH SCROLLING WIHT LOCOMOTIVE----------------------->


const scroll = new LocomotiveScroll({
  el: document.querySelector('.main-div'),
  smooth: true
});



gsap.to(".text span", {
  opacity: 1,
  duration: 0.1,
  stagger: 0.15,
  ease: "power2.out"
});


function cardCity()  {
let cardCity = document.querySelector(".card-city");
cardCity.style.visibility="visible";
cardCity.style.opacity="1";
}

function closecard() {
  let cardCity = document.querySelector(".card-city");
  cardCity.style.visibility="hidden";
  cardCity.style.opacity="0";
}

