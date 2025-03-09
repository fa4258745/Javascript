
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
  document.querySelector(".sidebar").style.opacity = 1;
  document.querySelector(".sidebar").style.left = 0;
};
let sidebarClose = () => {
  document.querySelector(".sidebar").style.opacity = 0;
  document.querySelector(".sidebar").style.left = -380;
};
sidebar();
sidebarClose();
// <---------------------- FOR LOGUT THE PAGE----------------------->



let booknow = () => {
  if (localStorage.getItem("Name")) {
    location.href = "book.html";
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Login First!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
};

// let checklogin = () => {
//   if (localStorage.getItem("Name")) {
//     document.querySelector(".singOut").style.display = "none";
//             location.href = "index.html";
//         localStorage.clear();
//   } else {
//     document.querySelector("#singIn").style.display = "none";
//     document.querySelector("#singOut").style.display = "block";
//   }
// };


let checkLogin = () => {
  const signInBtn = document.querySelector(".signIn");
  const signOutBtn = document.querySelector(".signOut");
  
  if (localStorage.getItem("Name")) {
    // User is signed in
    signInBtn.style.display = "none";
    signOutBtn.style.display = "block";
  } else {
    // User is not signed in
    signInBtn.style.display = "block";
    signOutBtn.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", checkLogin);




let logout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You will be logged out!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.clear();
      Swal.fire({
        title: "Logged Out!",
        text: "You have been successfully logged out.",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      
      setTimeout(() => {
        location.href = "index.html";
      }, 1500);
    }
  });
};


// <----------------------SMOOTH SCROLLING WIHT LOCOMOTIVE----------------------->

const scroll = new LocomotiveScroll({
  el: document.querySelector(".main-div"),
  smooth: true,
});

gsap.to(".text span", {
  opacity: 1,
  duration: 0.1,
  stagger: 0.15,
  ease: "power2.out",
});

function cardCity() {
  let cardCity = document.querySelector(".card-city");
  cardCity.style.visibility = "visible";
  cardCity.style.opacity = "1";
}

function closecard() {
  let cardCity = document.querySelector(".card-city");
  cardCity.style.visibility = "hidden";
  cardCity.style.opacity = "0";
}








// <-----------------LOADER--------------------->
window.addEventListener("load", function () {
  setTimeout(() => {
      document.getElementById("loader").style.transform = "translateY(-100%)";
      document.getElementById("loader").style.transform = "translateX(-100%)";
      setTimeout(() => {
          document.getElementById("loader").style.display = "none"; 
          document.getElementById("mainContent").style.display = "block";
      }, 1000); 
  }, 3760); 
});







console.log(ScrollTrigger);



// gsap.registerPlugin(ScrollTrigger);
// gsap.to(".text", {
//     scale: 1,
//     opacity: 1,
//     duration: 1.5,
//     ease: "power2.out",
//     scrollTrigger: {
//         trigger: ".text",
//         start: "top 75%",
//         end: "top 50%",
//         scrub: true
//     }
// });






gsap.to(".box", { x: 200, duration: 2, repeat: -1, yoyo: true });
Draggable.create(".box");