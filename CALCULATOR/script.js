let store="";

let dis =(value) => {
let show = document.querySelector("#display");
   store= store+value;
   show.innerHTML = store;
}


let res=()=> {
    let show = document.querySelector("#display");
      show.innerHTML = eval(store); //string => number
      store=eval(store);  // 3number
      store = eval(store).toString(); // 3string
}

// delete one value
let del =()=> {
    store=store.slice(0,-1)
    let show=document.querySelector("#display")
    show.innerHTML=store;
}

// delete all val
let delAll =()=> {
    store=""; //Reset store
    let show=document.querySelector("#display")
    show.innerHTML="0";
}


// // Add keypress event listener to support keyboard input
// document.addEventListener("keydown", (event) => {
//     const key = event.key;

//     if (!isNaN(key) || ["+", "-", "*", "/", "%"].includes(key)) {
//         dis(key); // Display number or operator
//     } else if (key === "Enter") {
//         res(); // Calculate result when Enter is pressed
//     } else if (key === "Backspace") {
//         del(); // Delete last character when Backspace is pressed
//     } else if (key === "Escape") {
//         delAll(); // Clear everything when Escape is pressed
//     }
// });


