let store="";

let dis =(value) => {
let show = document.querySelector("#display");
   store= store+value;
    show.style.backgroundColor="#5050504a";
   show.innerHTML = store;
  
}

let fs =()=> {
    show.focus()
    dis(value)
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
    show.style.backgroundColor=""; 

  
}




document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || ["+", "-", "*", "/", "%"].includes(key)) {
        dis(key); 
    } else if (key === "Enter") {
        res(); 
    } else if (key === "Backspace") {
        del();
    } else if (key === "Escape") {
        delAll(); 
    }
});








