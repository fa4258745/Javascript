// let Data = async () => {
//   let url = "http://localhost:3000/movie"; // Asynchronous function to fetch data from API
//   let res = await fetch(url); // API endpoint
//   console.log(res);
//   let data = await res.json(); // Fetching data from API
//   console.log(data);
//   let shown = document.querySelector("#show");
//   data.map((e) => {
//     // Looping through each movie object in the array
//     shown.innerHTML += `
//     <table>
//     <tr>
//     <td>
//     ${e.name}
//     </td>
//     <td>
//     ${e.age}
//      </td>
//      <td>
//      ${e.city}
//      </td>
//      <td>
//      ${e.adhaar}
//      </td>
//      <td >
//      ${e.price}
//      </td>
//      <td>
//      ${e.person}
//      </td>
//      <td>
//      ${e.price * e.person}
//      </td>
//      <td onclick="deletee('${e.id}')">Cancel </td>
//      </tr>

//      </table>
//      `;
//   });
// };

// let deletee = (id) => {
//   let url = `http://localhost:3000/movie/${id}`; // Constructing API endpoint for deletion
//   fetch(url, { method: "DELETE" }).then(() => {
//     confirmDele()
//     // Function to fetch data after deletion

//     // Fetch data after deletion

//     Data();

//     //Sending DELETE request to API

//     // Displaying a success message after deletion
//     Swal.fire("Deleted!", "Your movie has been deleted.", "success");
//   });

//   //Sending DELETE request to API
// };
// Data();

// let insert = () => {
//   let inpname = document.querySelector("#name").value;
//   let inpage = document.querySelector("#age").value;
//   let inpcity = document.querySelector("#city").value;
//   let inpadhaar = document.querySelector("#adhaar").value;
//   let inpnum = document.querySelector("#number").value;
//   let inpperson = document.querySelector("#person").value;
//   let inpdate = document.querySelector("#date").value;

//   let url = "http://localhost:3000/movie";
//   fetch(url, {
//     method: "POST",
//     headers: {
//       //extra information for the server (like labels on a package)
//       //Contenttype=> Tells the server what format the data is in.
//       "Content-Type": "application/json", //Without Content-Type, the server might reject or misinterpret your request.
//     }, //aplication/json=>  Use this when sending JSON data in fetch().
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
//       deletee(id);
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success",
//       });
//     }
//   });
//   location.href = "index.html";
//   return false;
// };

// <-------------------------UNDERSTANDING---------------------------->
// <---------------------PRACTICE----------------------------->

//<-------Fetching and Displaying Movie Data------>
let data = async () => {
  let url = "http://localhost:3000/movie"; // API endpoint for fetching movie data
  let res = await fetch(url);
  console.log(res);
  let movie = await res.json();

  movie.map((e) => {
    shown.innerHTML += `
  <tr>
  <td>${e.name}</td>
 <td onclick="deleted()">Delete</td>
  </tr>
  `;
  });
};

let deleted = (id) => {
  let url = `http://localhost:3000/movie/${id}`; // API endpoint for fetching movie data
  fetch(url, { method: "DELETE" });
  data();
};

let insertion = () => {
  let inpname = document.querySelector("#name").value;
  let url = "http://localhost:3000/movie"; // API endpoint for inserting data
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: inpname,
    }),
  });
};

let finalupdated = (id) => {
  let inpname = document.querySelector("#name").value;
};

let formFill = async () => {
  let url = `http://localhost:3000/movie/${id}`;
  let res = await fetch(url);
  let data=await res.json() ;
    let formdata=`
    ENter name : 
    
    `
};

// <---------------------PRACTICE----------------------------->

let Data = async () => {
  let url = "http://localhost:3000/movie"; // API endpoint for fetching movie data
  let res = await fetch(url); // Fetch data from the API
  console.log(res); // Log the response object
  let data = await res.json(); // Convert the response to JSON format
  console.log(data); // Log the parsed data

  let shown = document.querySelector("#show"); // Select the table to display movie data
  shown.innerHTML = ""; // Clear existing table data before appending new data

  data.map((e) => {
    // Loop through each movie object in the array and display it in a table
    shown.innerHTML += `
    <tr>
      <td>${e.name}</td>
      <td>${e.age}</td>
      <td>${e.city}</td>
      <td>${e.adhaar}</td>
      <td>${e.price}</td>
      <td>${e.person}</td>
      <td>${e.price * e.person}</td>
      <td onclick="deletee('${e.id}')">Cancel</td>
    </tr>
    `;
  });
};

// Call the Data function to fetch and display data when the page loads
Data();

// <----------Deleting a Movie Entry---------->
let deletee = (id) => {
  let url = `http://localhost:3000/movie/${id}`; // Construct API endpoint for deletion
  fetch(url, { method: "DELETE" }) // Send a DELETE request to the API
    .then(() => {
      confirmDele(); // Show confirmation popup
      Data(); // Refresh the data list after deletion
      Swal.fire("Deleted!", "Your movie has been deleted.", "success"); // Show success message
    });
};

// <-----------Inserting a New Movie Entry--------->
let insert = () => {
  let inpname = document.querySelector("#name").value; // Get name input value
  let inpage = document.querySelector("#age").value; // Get age input value
  let inpcity = document.querySelector("#city").value; // Get city input value
  let inpadhaar = document.querySelector("#adhaar").value; // Get Aadhaar input value
  let inpnum = document.querySelector("#number").value; // Get number input value
  let inpperson = document.querySelector("#person").value; // Get person input value
  let inpdate = document.querySelector("#date").value; // Get date input value

  let url = "http://localhost:3000/movie"; // API endpoint for inserting data
  fetch(url, {
    method: "POST", // Send a POST request to create a new record
    headers: {
      "Content-Type": "application/json", // Specify that the request body is JSON
    },
    body: JSON.stringify({
      name: inpname,
      age: inpage,
      city: inpcity,
      adhaar: inpadhaar,
      number: inpnum,
      person: inpperson,
      date: inpdate,
      price: 3000, // Default price per person
    }),
  }).then(() => {
    Swal.fire("Added!", "New booking has been added.", "success"); // Show success message
    Data(); // Refresh the table with updated data
  });
};

// <----------Confirmation Before Deleting a Movie---------->
let confirmDele = (id) => {
  Swal.fire({
    title: "Are you sure?", // Confirmation message
    text: "You won't be able to revert this!", // Warning text
    icon: "warning", // Warning icon
    showCancelButton: true, // Display a cancel button
    confirmButtonColor: "#3085d6", // Confirm button color
    cancelButtonColor: "#d33", // Cancel button color
    confirmButtonText: "Yes, delete it!", // Confirm button text
  }).then((result) => {
    if (result.isConfirmed) {
      deletee(id); // Proceed with deletion if confirmed
      Swal.fire({
        title: "Deleted!",
        text: "Your booking has been deleted.",
        icon: "success",
      });
    }
  });
};

// <----------Updating a Movie Entry---------->
let finalupdate = (id) => {
  let inpname = document.querySelector("#name").value; // Get updated name
  let inpage = document.querySelector("#age").value; // Get updated age
  let inpcity = document.querySelector("#city").value; // Get updated city
  let inpadhaar = document.querySelector("#adhaar").value; // Get updated Aadhaar
  let inpnum = document.querySelector("#number").value; // Get updated mobile number
  let inpperson = document.querySelector("#person").value; // Get updated number of persons
  let inpdate = document.querySelector("#date").value; // Get updated date

  let url = `http://localhost:3000/movie/${id}`; // API endpoint for updating the record
  fetch(url, {
    method: "PUT", // Send a PUT request to update the record
    headers: {
      "Content-Type": "application/json", // Specify JSON format
    },
    body: JSON.stringify({
      name: inpname,
      age: inpage,
      city: inpcity,
      adhaar: inpadhaar,
      number: inpnum,
      person: inpperson,
      date: inpdate,
      price: 3000, // Default price per person
    }),
  })
    .then((res) => res.json()) // Convert response to JSON
    .then(() => {
      Swal.fire("Updated!", "Your booking has been updated.", "success"); // Show success message
      Data(); // Refresh the table with updated data
    })
    .catch((error) => console.error("Error:", error)); // Log any errors
};

// <-----------Fetching and Pre-Filling the Form for Update--------->

let formfill = async (id) => {
  let url = `http://localhost:3000/movie/${id}`; // API endpoint for getting specific record
  let res = await fetch(url); // Fetch data for the selected movie
  let data = await res.json(); // Convert response to JSON

  let formData = `
    Enter name: <input type="text" value="${data.name}" id="name"> <br><br>
    Enter age: <input type="text" value="${data.age}" id="age"> <br><br>
    Enter City: <input type="text" value="${data.city}" id="city"> <br><br>
    Enter Addhaar no: <input type="text" value="${
      data.adhaar
    }" id="adhaar"> <br><br>
    Enter Mobile: <input type="text" value="${
      data.number
    }" id="number"> <br><br>
    Enter Date: <input type="date" value="${data.date}" id="date"> <br><br>
    Person: <select id="person">
      <option value="1" ${data.person == 1 ? "selected" : ""}>1</option>
      <option value="2" ${data.person == 2 ? "selected" : ""}>2</option>
      <option value="3" ${data.person == 3 ? "selected" : ""}>3</option>
      <option value="4" ${data.person == 4 ? "selected" : ""}>4</option>
    </select> <br><br>
    <button onclick="return finalupdate('${data.id}')">Update Booking</button>
  `;
  document.querySelector("#show").innerHTML = formData; // Display form with pre-filled data
};

// <-------------------->
// <-------------------->
// <-------------------->
