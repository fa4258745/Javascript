let sidebar = () => {
    document.querySelector(".sidebar").style.display = "block";
  };
  let sidebarClose = () => {
    document.querySelector(".sidebar").style.display = "none";
  };
  sidebar();
  sidebarClose();



  gsap.to(".text span", {
    opacity: 1,
    duration: 2,
    stagger: 0.15,
    ease: "power2.out"
  });
  



