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

gsap.to(".text span", {
  opacity: 1,
  duration: 2,
  stagger: 0.15,
  ease: "power2.out",
});

function closeBtn() {
  let modal = document.querySelector(".book-ticket-container-card ");
  modal.style.opacity = "0";
  modal.style.visibility = "hidden";
}

function Cardshow() {
  let modal = document.querySelector(".book-ticket-container-card ");
  modal.style.opacity = "1";
  modal.style.visibility = "visible";
}
