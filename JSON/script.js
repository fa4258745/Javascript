let Data = async () => {
  let url = "http://localhost:3000/movie"; // Asynchronous function to fetch data from API
  let res = await fetch(url); // API endpoint
  console.log(res);
  let data = await res.json(); // Fetching data from API
  console.log(data);
  let shown = document.querySelector("#show");
  data.map((e) => {
    // Looping through each movie object in the array
    shown.innerHTML += `
    <table>
    <tr>
    <td> 
    ${e.name}
    </td>
    <td> 
    ${e.age}
     </td>
     <td> 
     ${e.genre}
     </td>
     <td> 
     ${e.age * e.price}
     </td>
     <td> 
     ${e.price}
     </td>
     <td> 
     ${e.person}
     </td>
     <td> 
     ${e.price * e.person}
     </td>
     <td onclick="deletee('${e.id}')">Cancel </td>
     </tr>
     
     </table>
     `;
  });
};

let deletee = (id) => {
  let url = `http://localhost:3000/movie/${id}`; // Constructing API endpoint for deletion
  fetch(url, { method: "DELETE" }); //Sending DELETE request to API
};
Data();
