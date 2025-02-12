// returns the value of PI (3.14159)
// console.log(Math.PI);

// return the absolute (positive) value of x  (-5) = 5
// console.log(Math.abs(-99))

// rounds down to the nearest integer  (4.9) = 4 
// console.log(Math.floor(4.4)) 


// rounds up to the nearest integer (4.1) = 5 
// console.log(Math.ceil(4.4)) 

// returns the square root of x  (25) = 5
// console.log(Math.sqrt(10))

// returns x raised to the power y//  (2,4) =16
// console.log(Math.pow(2,4))   

// return the smallest num ;
// console.log(Math.min(14,5,7,8))

// return the largest num ;
// console.log(Math.max(14,5,7,8))

// generates a random number between 0 and 1
console.log(Math.round(3.4))

// removes the integer part (remove decimels)
// console.log(Math.trunc(5.5))

// console.log(Math.floor(Math.random() * 100))

// console.log(Math.floor(Math.random() * 9000)+1000);




function sum() {

 let ran =(Math.floor(Math.random()*6+1));
 let sum = document.querySelector(".para");

if(ran==1) {
    sum.innerHTML=ran;
}
else if (ran==2) {
    sum.innerHTML=ran;
}
else if(ran==3) {
    sum.innerHTML=ran;
}
else if (ran==4) {
    sum.innerHTML=ran;
}
else if(ran==5) {
    sum.innerHTML=ran;
}
else{
    
    sum.innerHTML=ran;
}




}

// new keyword run in run times