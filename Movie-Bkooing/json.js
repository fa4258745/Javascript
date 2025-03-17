// const fetchData = async () => {
//   let url = "http://localhost:3000/movie";
//   let res = await fetch(url);
//   let data = await res.json();
//   datashow(data);
//   paginationData(data); // Now correctly passing data
// };

// let paginationData = (data) => {
//   $("#pages").pagination({
//     dataSource: data,
//     pageSize: 4,
//     showGoInput: true,
//     showGoButton: true,
//     callback: function (data, pagination) {
//       datashow(data);
//     },
//   });
// };

// let datashow = (data) => {
//   let show = document.querySelector("#dataDisplay");
//   show.innerHTML = ""; // Clear previous data

//   data.map((e) => {
//     show.innerHTML += `
//           <tr>
//               <td>${e.language}</td>
//               <td>${e.date}</td>
//               <td>${e.time}</td>
//               <td>${e.price}</td>
//               <td>${e.seat}</td>
//               <td>${e.price * e.seat}</td>
//               <td onclick="confirmDelete('${
//                 e.id
//                 }')" style="cursor:pointer; color:red;">Delete</td>
//                 <td onclick="formfill('${e.id}')" style="cursor:pointer; color:blue;">Update</td>

//               </tr>`;
//             });
//           };

// const confirmDelete = (id) => {
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
//       deleteTicket(id);
//     }
//   });
// };

// const deleteTicket = async (id) => {
//   try {
//     let url = `http://localhost:3000/movie/${id}`;
//     await fetch(url, { method: "DELETE" });
//     fetchData(); // Refresh table after deletion
//   } catch (error) {
//     console.error("Error deleting data:", error);
//   }
// };

// const FIND = async () => {
//   let searchinp = document.querySelector("#searchinp").value;
//   let url = "http://localhost:3000/movie";

//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     let filteredData = data.filter((e) =>
//       e.language.toLowerCase().includes(searchinp.toLowerCase())
//     );
//     datashow(filteredData);
//     paginationData(filteredData); // Reset pagination
//   } catch (error) {
//     console.error("Error filtering data:", error);
//   }
// };

// const userInput = async (event) => {
//   event.preventDefault(); // Prevent form submission

//   let inplanguage = document.querySelector("#lan").value;
//   let inpdate = document.querySelector("#date").value;
//   let inptime = document.querySelector("#time").value;
//   let inpprice = document.querySelector("#price").value;
//   let inpseat = document.querySelector("#seat").value;

//   let url = "http://localhost:3000/movie";

//   try {
//     await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         seat: inpseat,
//         date: inpdate,
//         time: inptime,
//         price: inpprice,
//         language: inplanguage,
//       }),
//     });
//     fetchData(); // Refresh table after adding data
//   } catch (error) {
//     console.error("Error adding data:", error);
//   }
// };

// const formfill = async (id) => {
//   let url = `http://localhost:3000/movie/${id}`;
//   let res = await fetch(url, { method: "GET" });
//   let data = await res.json();
//   console.log(data);
//   let formdata = `
//   <div class="container-ticket-flex">
// <form onsubmit="return userInput(event)">
//     <h1>Book Ticket</h1>
//     <div class="box-01">
//         Select Language:
//       <select id="uplan">
//     <option value="Hindi" ${data.language }>English</option>
// </select>

//         </div>
//         <div class="box-01">
//             Choose Date:
//             <input type="date" id="date" value="${data.date}">
//         </div>
//         <div class="box-01">
//             Choose Time:
//             <input type="datetime-local" id="uptime" value="${data.time}">
//         </div>
//         <div class="box-01">
//             <label>Choose Price:</label>
//             <select id="price" value="${data.price}">
//                 <option value="50">Rs. 0-100</option>
//                 <option value="150">Rs. 101-200</option>
//                 <option value="250">Rs. 201-300</option>
//                 <option value="350">Rs. 301-400</option>
//                 <option value="450">Rs. 401-500</option>
//             </select>
//         </div>
//         <div class="box-01">
//             Choose Seats:
//             <select id="seat" value="${data.seat}">
//                 <option value="1">1</option>
//                 <option value="2">2</option>
//                 <option value="3">3</option>
//                 <option value="4">4</option>
//                 <option value="5">5</option>
//                 <option value="6">6</option>
//                 <option value="7">7</option>
//                 <option value="8">8</option>
//                 <option value="9">9</option>
//                 <option value="10">10</option>
//             </select>
//         </div>
//         <h2>Total amount:</h2>
//         <input type="submit" value="Update" onclick="return finalupdate('${data.id}')">
//     </form>
// </div>
//   `;
//   document.querySelector("#show").innerHTML = formdata;
// };

// const finalupdate = async (event, id) => {
//   event.preventDefault(); // Prevent form submission

//   let inplan = document.querySelector("#uplan").value;
//   let inpdate = document.querySelector("#date").value;
//   let inptime = document.querySelector("#uptime").value;
//   let inpprice = document.querySelector("#price").value;
//   let inpseat = document.querySelector("#seat").value;

//   let url = `http://localhost:3000/movie/${id}`;

//     fetch(url, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         seat: inpseat,
//         date: inpdate,
//         time: inptime,
//         price: inpprice,
//         language: inplan,
//       }),
//     });
//     fetchData(); // Refresh table after update
//     document.querySelector("#show").innerHTML = ""; // Clear form

//   return false;
// }

const fetchData = async () => {
  let url = "http://localhost:3000/movie";
  let res = await fetch(url);
  let data = await res.json();
  datashow(data);
  paginationData(data);
};

let paginationData = (data) => {
  $("#pages").pagination({
    dataSource: data,
    pageSize: 3,
    showGoInput: true,
    showGoButton: true,
    callback: function (data) {
      datashow(data);
    },
  });
};

let datashow = (data) => {
  let show = document.querySelector("#dataDisplay");
  show.innerHTML = "";
  data.forEach((e) => {
    show.innerHTML += `
          <tr>
          <td>${e.movie}</td>
             <td>${e.language}</td>
              <td>${e.date}</td>
              <td>${e.time}</td>
              <td>${e.price}</td>
              <td>${e.seat}</td>
              <td>${e.price * e.seat}</td>
              <td onclick="confirmDelete('${
                e.id
              }')" style="cursor:pointer; color:red;">Delete</td>
              <td onclick="formfill('${
                e.id
              }')" style="cursor:pointer; color:blue;">Update</td>
          </tr>`;
  });
};

const confirmDelete = (id) => {
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
      deleteTicket(id);
    }
  });
};

const deleteTicket = async (id) => {
  let url = `http://localhost:3000/movie/${id}`;
  await fetch(url, { method: "DELETE" });
  fetchData();
};

const FIND = async () => {
  let searchinp = document.querySelector("#searchinp").value;
  let url = "http://localhost:3000/movie";
  let res = await fetch(url);
  let data = await res.json();
  let filteredData = data.filter((e) =>
    e.language.toLowerCase().includes(searchinp.toLowerCase()) ||
    e.movie.toLowerCase().includes(searchinp.toLowerCase())
  );
  datashow(filteredData);
  paginationData(filteredData);
};



const userInput = async (event) => {
  event.preventDefault();
  let inpmovie = document.querySelector("#movie").value;
  let inplanguage = document.querySelector("#lan").value;
  let inpdate = document.querySelector("#date").value;
  let inptime = document.querySelector("#time").value;
  let inpprice = document.querySelector("#price").value;
  let inpseat = document.querySelector("#seat").value;
  let url = "http://localhost:3000/movie";

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      seat: inpseat,
      date: inpdate,
      time: inptime,
      price: inpprice,
      movie: inpmovie,
      language: inplanguage,
    }),
  });

  fetchData();
};

const formfill = async (id) => {
  let url = `http://localhost:3000/movie/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  document.querySelector("#show").innerHTML = `
  <div class="container-ticket-flex">
      <form onsubmit="return finalUpdate(event, '${data.id}')">
      <div class="box-01"> 
      Choose Movie:
         <select id="upmovie">
                 <option value="Airforce" ${
                   data.movie === "Airforce" ? "selected" : ""
                 }>Airforce</option>
                 <option value="Chhava" ${
                   data.movie === "Chhava" ? "selected" : ""
                 }>Chhava</option>
             </select>
   
                  </div>
           <div class="box-01"> 
           Choose language :
      <select id="uplan">
              <option value="Hindi" ${
                data.language === "Hindi" ? "selected" : ""
              }>Hindi</option>
              <option value="English" ${
                data.language === "English" ? "selected" : ""
              }>English</option>
          </select>
          </div>
                <div class="box-01">
                Choose date : 
          <input type="date" id="update" value="${data.date}">
          </div>
          <div class="box-01">
          Choose time :
          <input type="datetime-local" id="uptime" value="${data.time}">
          </div>
          
          <div class="box-01">
          <label>Choose Price:</label>
          <select id="upprice" value="${data.price}">
          <option value="50">Rs. 0-100</option>
          <option value="150">Rs. 101-200</option>              
          <option value="250">Rs. 201-300</option>
          <option value="350">Rs. 301-400</option>
          <option value="450">Rs. 401-500</option>             
          </select>
          </div>
          
           <div class="box-01">
          
                   Choose Seats:
                   <select id="upseat" value="${data.seat}">
                   <option value="1">1</option>
                   option value="2">2</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="5">5</option>
                 <option value="6">6</option>
                 <option value="7">7</option>
                 <option value="8">8</option>
                 <option value="9">9</option>
                 <option value="10">10</option>
             </select>
            </div>
          <input type="submit" value="Update">
        
                 </div>

      </form>
       </div>
      
      
      
      `;
};

const finalUpdate = async (event, id) => {
  event.preventDefault();
  let url = `http://localhost:3000/movie/${id}`;
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language: document.querySelector("#uplan").value,
      movie: document.querySelector("#upmovie").value,
      date: document.querySelector("#update").value,
      time: document.querySelector("#uptime").value,
      price: document.querySelector("#upprice").value,
      seat: document.querySelector("#upseat").value,

    }),
  });
  fetchData();
  document.querySelector("#show").innerHTML = "";
};

fetchData();
