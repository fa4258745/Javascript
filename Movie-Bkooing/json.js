
let fetchData = async ()=> {

let url = "http://localhost:3000/movie";

let res = fetch(url,{method:"GET"});
let data =res.json();
let display = document.querySelector("#display");
console.log(data);

data.map((e)=> {
   return display.innerHTML=`
   <tbody> 
   <tr>   
   <td> ${e.name} </td>
   <td> ${e.person} </td>
   <td> ${e.date} </td>
   <td> ${e.price} </td>
   <td> ${Total.price} </td>
   <td onclick ="confirmdeletee('${e.id}')">DELETE</td>
   <td> onclick = "formfill('${e.id}')">UPDATE</td>
   </tr>
   </tbody> 
   `
})
}


let confirmdeletee = (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
     if (result.isConfirmed) {

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            }).then(() => {
                deletee(id)
            })
        }
    });
}


let deletee = (id) => {
    let url = `http://localhost:3000/movie/${e.id}`
    fetch(url, { method: "DELETE" })
}


let userInput =() => {
    let inplanguage = document.querySelector("#lan").value
    let inpdate = document.querySelector("#date").value
    let inptime = document.querySelector("#time").value
    let inpprice = document.querySelector("#price").value
    let inpseat = document.querySelector("#seat").value
    
   let url ="http://localhost:3000/movie";
   fetch(url,  {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify ({
      seat:inpseat,
      date:inpdate,
      time:inptime,
      price:inpprice,

    })

   })

}

