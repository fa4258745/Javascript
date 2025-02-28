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
     ${e.city}
     </td>
     <td> 
     ${e.adhaar}
     </td>
     <td> 
     ${e.age * e.price}
     </td>
     <td > 
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
  fetch(url, { method: "DELETE" })
  .then(()=> {
    Data();
  })
  //Sending DELETE request to API
};
Data();

let insert = () => {
  let inpname = document.querySelector("#name").value;
  let inpage = document.querySelector("#age").value;
  let inpcity = document.querySelector("#city").value;
  let inpadhaar = document.querySelector("#adhaar").value;
  let inpnum = document.querySelector("#number").value;
  let inpperson = document.querySelector("#person").value;
  let inpdate = document.querySelector("#date").value;

  let url = "http://localhost:3000/movie";
  fetch(url, {
    method: "POST",
    headers: {        //extra information for the server (like labels on a package)
      //Contenttype=> Tells the server what format the data is in.
      "Content-Type": "application/json",   //Without Content-Type, the server might reject or misinterpret your request.
    },       //aplication/json=>  Use this when sending JSON data in fetch().
    body: JSON.stringify({
      name: inpname,
      age: inpage,
      city: inpcity,
      adhaar: inpadhaar,
      number: inpnum,
      person: inpperson,
      date: inpdate,
      price: 3000,
    }),
  });
};

let confirmDele = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deletee(id);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }





  });
};












































// Function to fetch and display data
// let Data = async () => {
//     let url = "http://localhost:3000/movie"; 
//     let res = await fetch(url);
//     let data = await res.json();
//     let shown = document.querySelector("#show");
  
//     // Clear previous data before appending new ones
//     shown.innerHTML = `
//       <tr>
//         <th>NAME:</th>
//         <th>AGE:</th>
//         <th>Genre:</th>
//         <th>Addhaar No.</th>
//         <th>Price</th>
//         <th>Person</th>
//         <th>Total</th>
//         <th>Cancel</th>
//       </tr>
//     `;
  
//     data.forEach((e) => {
//       let row = `
//         <tr>
//           <td>${e.name}</td>
//           <td>${e.age}</td>
//           <td>${e.city}</td>
//           <td>${e.adhaar}</td>
//           <td>${e.price}</td>
//           <td>${e.person}</td>
//           <td>${e.price * e.person}</td>
//           <td onclick="confirmDele('${e.id}')">Cancel</td>
//         </tr>
//       `;
//       shown.innerHTML += row;
//     });
//   };
  
//   // Function to delete data
//   let deletee = async (id) => {
//     let url = `http://localhost:3000/movie/${id}`;
//     await fetch(url, { method: "DELETE" });
//     Data(); // Refresh table after deletion
//   };
  
//   // Function to confirm deletion using SweetAlert
//   let confirmDele = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!"
//     }).then((result) => {
//       if (result.isConfirmed) {
//         deletee(id);
//         Swal.fire({
//           title: "Deleted!",
//           text: "Your entry has been deleted.",
//           icon: "success"
//         });
//       }
//     });
//   };
  
//   // Function to insert data
//   let insert = () => {
//     let inpname = document.querySelector("#name").value;
//     let inpage = document.querySelector("#age").value;
//     let inpcity = document.querySelector("#city").value;
//     let inpadhaar = document.querySelector("#adhaar").value;
//     let inpnum = document.querySelector("#number").value;
//     let inpperson = document.querySelector("#person").value;
//     let inpdate = document.querySelector("#date").value;
  
//     let url = "http://localhost:3000/movie";
//     fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: inpname,
//         age: inpage,
//         city: inpcity,
//         adhaar: inpadhaar,
//         number: inpnum,
//         person: inpperson,
//         date: inpdate,
//         price: 3000
//       }),
//     }).then(() => {
//       Swal.fire({
//         title: "Success!",
//         text: "Booking Confirmed!",
//         icon: "success"
//       });
//       Data(); // Refresh table
//     });
  
//     return false; // Prevent form from reloading the page
//   };
  
//   // Load data initially
//   Data();
  