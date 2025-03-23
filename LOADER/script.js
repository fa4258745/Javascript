// var loader = document.querySelector("#preloader");
// window.addEventListener("load",function() {
//     this.setTimeout(function() {
// loader.style.top="-100%"
//     })
//   })

var loader = document.querySelector("#preloader");
setTimeout((preloader)=> {
loader.style.top="-100%"
 loader.style.display="none";

},4000)