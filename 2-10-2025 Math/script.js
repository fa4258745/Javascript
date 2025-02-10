// console.log(Math.PI);

// console.log(Math.ceil(4.4))

// console.log(Math.floor(4.4))

// console.log(Math.round(4.4))

// console.log(Math.random() * 10)

// console.log(Math.abs(-5))
// console.log(Math.floor(Math.random() * 9000)+1000);


// console.log(Math.pow(2,4))

// console.log(Math.sqrt(4))


function sum() {

    let ran=(Math.floor(Math.random()*6+1));
    let para=document.querySelector(".para");
    
    if(ran==1) {
        para.innerHTML="one";
        box1.style.opacity="1";
  }
  else if(ran==2) {
    para.innerHTML="two";
  }
  else if(ran==3) {
    para.innerHTML="three";
  }
  else if(ran==4) {
    para.innerHTML="four";
  }
  else if(ran==5) {
    para.innerHTML="five";
  }
  else {
    para.innerHTML="six";
  }
}