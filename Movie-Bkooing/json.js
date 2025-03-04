// let fetchData = async () => {
//   let url = "http://localhost:3000/movie";

//   let res = await fetch(url, { method: "GET" });
//   let data = await res.json();
//   console.log(data);
//   let display = document.querySelector("#dataDisplay");
//   data.map((e) => {
//     return (display.innerHTML += `
//    <tbody>
//    <tr>
//    <td> ${e.name} </td>
//    <td> ${e.person} </td>
//    <td> ${e.date} </td>
//    <td> ${e.price} </td>
//    <td> ${e.price} </td>
//    <td onclick ="confirmdeletee('${id}')">DELETE</td>
//    <td  onclick ="formfill('${id}')"> UPDATE</td>
//    </tr>
//    </tbody>
//    `);
//   });
// };

// let confirmdeletee = (id) => {
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
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your file has been deleted.",
//         icon: "success",
//       }).then(() => {
//         deletee(id);
//       });
//     }
//   });
// };

// let deletee = (id) => {
//   let url = `http://localhost:3000/movie/${e.id}`;
//   fetch(url, { method: "DELETE" });
// };

// let userInput = () => {
//   let inplanguage = document.querySelector("#lan").value;
//   let inpdate = document.querySelector("#date").value;
//   let inptime = document.querySelector("#time").value;
//   let inpprice = document.querySelector("#price").value;
//   let inpseat = document.querySelector("#seat").value;

//   let url = "http://localhost:3000/movie";
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       seat: inpseat,
//       date: inpdate,
//       time: inptime,
//       price: inpprice,
//       language: inplanguage,
//     }),
//   })
//     location.href = "json.html";
//   return false;
// };

// let formfill=async(id)=> {
//     let url=`http://localhost:3000/movie/${id}`
//     let res=await fetch(url,{method:"GET"})
//     let data=await res.json()
//       console.log(data)

//       let formdata= `

//                       <form action="">
//                 <h1>Book Ticket</h1>
//             </div>
//               <div class="box-01">
//                 Select Language <select name="" id="uplan" value=${data.lan}>
//                     <option value="hindi" selected>Hindi</option>
//                     <option value="english">English</option>
//                 </select>
//             </div>
//             <div class="box-01">
//                 Choose Date: <input type="date" name="" id="update" value=${data.date} >

//             </div>
//             <div class="box-01">
//                 Choose Time: <input type="datetime" name="" id="uptime" placeholder="Enter time" value=${data.time}>
//             </div>
// <div class="box-01">
//    <label for=""> Choose Price : </label>  <select name="" id="upPrice" value=${data.price}>
//         <option value="50">Rs. 0-100</option>
//         <option value="150">Rs. 101-200</option>
//         <option value="250">Rs. 201-300</option>
//         <option value="350">Rs. 301-400</option>
//         <option value="450">Rs. 401-500</option>
//     </select>
// </div>
// <div class="box-01">
//     Choose Seats :
//     <select name="" id="upseat">
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="10">10</option>
//     </select>

// </div>
// <div class="box-01">
//  Enter Price :  <input type="text" placeholder="Enter Price" class="price" >

// </div>
// <h2>Total amount:</h2>
//             <input type="submit" onclick="return finalUpdate('${id}')">
//         </div>
//     </form>
//       `
//       document.querySelector("#show").innerHTML=formdata
// }

// let finalUpdate =(id)=> {

//  let inplan = document.querySelector("#uplan").value;
//  let inpdate = document.querySelector("#update").value;
//  let inptime = document.querySelector("#uptime").value;
//  let inpprice = document.querySelector("#upPrice").value;
//  let inpseat = document.querySelector("#upseat").value;

//  let url = `http://localhost:3000/movie/${id}`;
//  fetch(url, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       seat: inpseat,
//       date: inpdate,
//       time: inptime,
//       price: inpprice,
//       language: inplan,
//     }),
//   })

//     location.href = "json.html";
//  }

const fetchData = async () => {
  let url = "http://localhost:3000/movie";
  let res = await fetch(url);
  let data = await res.json();
  let display = document.querySelector("#dataDisplay");
  display.innerHTML = "";

  data.forEach((e) => {
    display.innerHTML += `
          <tr>
              <td>${e.language}</td>
              <td>${e.date}</td>
              <td>${e.time}</td>
              <td>${e.price}</td>
              <td>${e.seat}</td>
              <td>${e.price * e.seat}</td>
              <td>
                  <button onclick="formfill('${e.id}')">Update</button>
                  <button onclick="confirmDelete('${e.id}')">Delete</button>
              </td>
          </tr>
      `;
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

const userInput = async (event) => {
  event.preventDefault(); // Prevent form submission

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
      language: inplanguage,
    }),
  });
     location.href = "json.html";   
     return false;
  // fetchData();
};

const formfill = async (id) => {
  let url = `http://localhost:3000/movie/${id}`;
  let res = await fetch(url);
  let data = await res.json();
  document.querySelector("#show").innerHTML = `
      <form onsubmit="return finalUpdate(event, '${id}')">
          <h1>Update Ticket</h1>
          <div>
              Select Language:
              <select id="uplan">
                  <option value="hindi" ${
                    data.language === "hindi" ? "selected" : ""
                  }>Hindi</option>
                  <option value="english" ${
                    data.language === "english" ? "selected" : ""
                  }>English</option>
              </select>
          </div>
          <div>
              Choose Date: <input type="date" id="update" value="${data.date}">
          </div>
          <div>
              Choose Time: <input type="datetime-local" id="uptime" value="${
                data.time
              }">
          </div>
          <div>
              Choose Price:
              <select id="upPrice">
                  <option value="50">Rs. 0-100</option>
                  <option value="150">Rs. 101-200</option>
                  <option value="250">Rs. 201-300</option>
                  <option value="350">Rs. 301-400</option>
                  <option value="450">Rs. 401-500</option>
              </select>
          </div>
          <div>
              Choose Seats:
              <select id="upseat">
                  <option value="1">1</option>
                  <option value="2">2</option>
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
          <input type="submit" value="Update Ticket">
      </form>
  `;
};

const finalUpdate = async (event, id) => {
  event.preventDefault();
  let inplan = document.querySelector("#uplan").value;
  let inpdate = document.querySelector("#update").value;
  let inptime = document.querySelector("#uptime").value;
  let inpprice = document.querySelector("#upPrice").value;
  let inpseat = document.querySelector("#upseat").value;

  let url = `http://localhost:3000/movie/${id}`;
  await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      seat: inpseat,
      date: inpdate,
      time: inptime,
      price: inpprice,
      language: inplan,
    }),
  });
  fetchData();
};

fetchData();

// const fetchData = async () => {
//   let url = "http://localhost:3000/movie";
//   let res = await fetch(url);
//   let data = await res.json();
//   let display = document.querySelector("#dataDisplay");
//   display.innerHTML = "";
//   data.map((e) => {
//       display.innerHTML += `
//           <tr>
//               <td>${e.language}</td>
//               <td>${e.date}</td>
//               <td>${e.time}</td>
//               <td>${e.price}</td>
//               <td>${e.seat}</td>
//               <td>${e.price * e.seat}</td>
//               <td>
//                   <button onclick="formfill('${e.id}')">Update</button>
//                   <button onclick="confirmdeletee('${e.id}')">Delete</button>
//               </td>
//           </tr>
//       `;
//   });
// };

// const confirmdeletee = (id) => {
//   Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//       if (result.isConfirmed) {
//           deletee(id);
//       }
//   });
// };

// const deletee = async (id) => {
//   let url = `http://localhost:3000/movie/${id}`;
//   await fetch(url, { method: "DELETE" });
//   fetchData();
// };

// const userInput = async () => {

//   let inplanguage = document.querySelector("#lan").value;
//   let inpdate = document.querySelector("#date").value;
//   let inptime = document.querySelector("#time").value;
//   let inpprice = document.querySelector("#price").value;
//   let inpseat = document.querySelector("#seat").value;

//   let url = "http://localhost:3000/movie";
//   await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//           seat: inpseat,
//           date: inpdate,
//           time: inptime,
//           price: inpprice,
//           language: inplanguage,
//       }),
//   });
//   fetchData();
//   return false;
// };

// const formfill = async (id) => {
//   let url = `http://localhost:3000/movie/${id}`;
//   let res = await fetch(url);
//   let data = await res.json();
//   document.querySelector("#show").innerHTML = `
//       <form onsubmit="return finalUpdate('${id}')">
//           <h1>Update Ticket</h1>
//           <div>
//               Select Language:
//               <select id="uplan">
//                   <option value="hindi" ${data.language === "hindi" ? "selected" : ""}>Hindi</option>
//                   <option value="english" ${data.language === "english" ? "selected" : ""}>English</option>
//               </select>
//           </div>
//           <div>
//               Choose Date: <input type="date" id="update" value="${data.date}">
//           </div>
//           <div>
//               Choose Time: <input type="datetime-local" id="uptime" value="${data.time}">
//           </div>
//           <div>
//               Choose Price:
//               <select id="upPrice">
//                   <option value="50">Rs. 0-100</option>
//                   <option value="150">Rs. 101-200</option>
//                   <option value="250">Rs. 201-300</option>
//                   <option value="350">Rs. 301-400</option>
//                   <option value="450">Rs. 401-500</option>
//               </select>
//           </div>
//           <div>
//               Choose Seats:
//               <select id="upseat">
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                   <option value="6">6</option>
//                   <option value="7">7</option>
//                   <option value="8">8</option>
//                   <option value="9">9</option>
//                   <option value="10">10</option>
//               </select>
//           </div>
//           <h2>Total amount:</h2>
//           <input type="submit" value="Update Ticket">
//       </form>
//   `;
// };

// const finalUpdate = async (id) => {
//   let inplan = document.querySelector("#uplan").value;
//   let inpdate = document.querySelector("#update").value;
//   let inptime = document.querySelector("#uptime").value;
//   let inpprice = document.querySelector("#upPrice").value;
//   let inpseat = document.querySelector("#upseat").value;

//   let url = `http://localhost:3000/movie/${id}`;
//   await fetch(url, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ seat: inpseat, date: inpdate, time: inptime, price: inpprice, language: inplan }),
//   });
//   fetchData();
//   return false;
// };

// fetchData();

// window.onload = fetchData;
