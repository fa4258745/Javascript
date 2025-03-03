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
  fetch(url, { method: "DELETE" }).then(() => {
    confirmDele()
    // Function to fetch data after deletion

    // Fetch data after deletion

    Data();

    //Sending DELETE request to API

    // Displaying a success message after deletion
    Swal.fire("Deleted!", "Your movie has been deleted.", "success");
  });

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
    headers: {
      //extra information for the server (like labels on a package)
      //Contenttype=> Tells the server what format the data is in.
      "Content-Type": "application/json", //Without Content-Type, the server might reject or misinterpret your request.
    }, //aplication/json=>  Use this when sending JSON data in fetch().
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
  location.href = "index.html";
  return false;
};

// let formfill = async (id) => {
//   let url = `http://localhost:3000/movie/${id}`;

//   let res = await fetch(url, { method: "GET" });
//   let data =await res.json();
//   console.log(data);
//   let formData = `
//   Enter name: <input type="text" value="${data.name}"  id="name"> <br> <br>
//        Enter age: <input type="text" value="${data.age}" id="age"> <br> <br>
//        Enter City: <input type="text" value="${data.city}" id="city"> <br> <br>
//        Enter Addhaar no: <input type="text" value="${data.Adhaarno}" id="adhaar"> <br> <br>
//        Enter Mobile: <input type="text"  value="${data.number}" id="number"> <br> <br>
//        Enter Date: <input type="date" value="${data.date}" id="date"> <br> <br>
//     Person: <select name="" id="person">
//     <option value="1">1</option>
//     <option value="2">2</option>
//     <option value="3">3</option>
//     <option value="4">4</option>
//     </select>
//     <br>
//     <br>
//     <input type="submit" value="Book" onclick="return finalupdate('${data.id})">
// `;

//       document.querySelector("#show").innerHTML = formData;
// };

// let finalupdate = () => {
//   let inpname = document.querySelector("#name").value;
//   let inpage = document.querySelector("#age").value;
//   let inpcity = document.querySelector("#city").value;
//   let inpadhaar = document.querySelector("#adhaar").value;
//   let inpnum = document.querySelector("#number").value;
//   let inpperson = document.querySelector("#person").value;
//   let inpdate = document.querySelector("#date").value;

//   let url = "http://localhost:3000/movie";
//   fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: inpname,
//       age: inpage,
//       city: inpcity,
//       adhaar: inpadhaar,
//       number: inpnum,
//       person: inpperson,
//       date: inpdate,
//       price: 3000,
//     }),
//   });
// };

// return false;

// <----------------------------------------------------------------------------->

// let finalupdate = (id) => {
//   let inpname = document.querySelector("#name").value;
//   let inpage = document.querySelector("#age").value;
//   let inpcity = document.querySelector("#city").value;
//   let inpadhaar = document.querySelector("#adhaar").value;
//   let inpnum = document.querySelector("#number").value;
//   let inpperson = document.querySelector("#person").value;
//   let inpdate = document.querySelector("#date").value;

//   let url = `http://localhost:3000/movie/${id}`; // Correct URL with the ID
//   fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       name: inpname,
//       age: inpage,
//       city: inpcity,
//       adhaar: inpadhaar,
//       number: inpnum,
//       person: inpperson,
//       date: inpdate,
//       price: 3000,
//     }),
//   })
//     .then((res) => res.json())
//     .then(() => {
//       Swal.fire("Updated!", "Your booking has been updated.", "success");
//       Data(); // Refresh table
//     })
//     .catch((error) => console.error("Error:", error));

//   return false;
// };

// let formfill = async (id) => {
//   let url = `http://localhost:3000/movie/${id}`;

//   let res = await fetch(url);
//   let data = await res.json();

//   let formData = `
//     Enter name: <input type="text" value="${data.name}" id="name"> <br> <br>
//     Enter age: <input type="text" value="${data.age}" id="age"> <br> <br>
//     Enter City: <input type="text" value="${data.city}" id="city"> <br> <br>
//     Enter Addhaar no: <input type="text" value="${data.adhaar}" id="adhaar"> <br> <br>
//     Enter Mobile: <input type="text" value="${data.number}" id="number"> <br> <br>
//     Enter Date: <input type="date" value="${data.date}" id="date"> <br> <br>
//     Person: <select id="person">
//       <option value="1" ${data.person == 1 ? "selected" : ""}>1</option>
//       <option value="2" ${data.person == 2 ? "selected" : ""}>2</option>
//       <option value="3" ${data.person == 3 ? "selected" : ""}>3</option>
//       <option value="4" ${data.person == 4 ? "selected" : ""}>4</option>
//     </select> <br><br>
//     <button onclick="return finalupdate('${data.id}')">Update Booking</button>
//   `;

//   document.querySelector("#show").innerHTML = formData;
// };

// let confirmDele = (id) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       deletee(id); // Only delete if confirmed
//       Swal.fire("Deleted!", "Your booking has been deleted.", "success");
//     }
//   });
// };
