let loaddata=()=>{
    let username=localStorage.getItem("Name")

    if(username==null){
   document.querySelector("#show").innerHTML="Firstly, Login to Crafted Journeys.......";
    }
    else{
     document.querySelector("#show").innerHTML=`Welcome Back....${username}`;
    }
    return false;
}