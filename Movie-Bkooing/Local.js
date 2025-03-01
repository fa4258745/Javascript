gsap.to(".text span", {
  opacity: 1,
  rotateX: 0,
  duration: 7,
  stagger: 0.2,
  ease: "power2.out",
});

const sr = ScrollReveal({
  distance: "200px",
  duration: 2800,
  reset: true,
});

sr.reveal(`.scroll-left,.container-1`, {
  origin: "left",
  interval: 100,
});

sr.reveal(`.scroll-right,.container-2`, {
  origin: "right",
  interval: 100,
});
sr.reveal(`.scroll-top,.container`, {
  origin: "top",
  interval: 100,
});
sr.reveal(`.scroll-bottom,.login-container`, {
  origin: "bottom",
  interval: 100,
});

ScrollReveal().reveal(".scroll-left", { delay: 500 });

// VANTA.BIRDS({
//   el: "#birds",
//   mouseControls: true,
//   touchControls: true,
//   gyroControls: false,
//   minHeight: 200.00,
//   minWidth: 200.00,
//   scale: 1.00,
//   scaleMobile: 1.00,
//   backgroundColor: 0x6c88ab

// })

let login = () => {
  let loginName = document.querySelector("#loginName").value.trim();
  let loginPassword = document.querySelector("#loginPassword").value.trim();

  let localName = localStorage.getItem("Name").trim();
  let localPassword = localStorage.getItem("Password").trim();

  if (loginName === localName && loginPassword === localPassword) {
    location.href = "localhome.html";
  } else {
    alert("Invalid Username or password");
  }
  return false;
};

let logout = () => {
  localStorage.clear();
  location.href = "index.html";
};

// ANIMATED TEXT
gsap.to(".text span", {
  opacity: 1,
  duration: 0.1,
  stagger: 0.15,
  ease: "power2.out"
});