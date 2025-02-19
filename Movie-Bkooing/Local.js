//     const sr = ScrollReveal({
// distance: '200px',
// duration: 2800,
// reset:true,
// });

// sr.reveal(`.scroll-left,.container-1`,
// {
//   origin: 'left',
//   interval: 100,
// }
// );

// sr.reveal(`.scroll-right,.container-2`,
// {
//   origin: 'right',
//   interval: 100,
// }
// );
// sr.reveal(`.scroll-top,.container`,
// {
//   origin: 'top',
//   interval: 100,
// }
// );
// sr.reveal(`.scroll-bottom,.login-container`,
// {
//   origin: 'bottom',
//   interval: 100,
// }
// );

let login = () => {
  let loginName = document.querySelector("#loginName").value.trim();
  let loginPassword = document.querySelector("#loginPassword").value.trim();

  let localName = localStorage.getItem("Name").trim();
  let localPassword = localStorage.getItem("Password").trim();

  if (loginName === localName && loginPassword === localPassword) {
    location.href = "localhome.html";
  } 
  else {
    alert("Invalid Username or password");
  }
  return false;
};

let logout = () => {
  localStorage.clear();
  location.href = "index.html";
};
