const fetchData = async () => {
  try {
      let url = "http://localhost:3000/movie";
      let res = await fetch(url,{method:"GET"});
      let data = await res.json();
      datashow(data); // Display fetched data
     paginationData(data);
  } catch (error) {
      console.error("Error fetching data:", error);
  };
};

let paginationData=()=> {
   $('#pages').pagination({
      dataSource:data,
      pageSize: 2,
      showGoInput: data,
      showGoButton: true,
      callback: function(data, pagination) {
          datashow(data)
      }
    })
}


let datashow = (data) => {
  let show = document.querySelector("#dataDisplay");
  show.innerHTML = ""; // Clear previous data

  data.forEach((e) => {
      show.innerHTML += `
          <tr>
              <td>${e.language}</td>
              <td>${e.date}</td>
              <td>${e.time}</td>
              <td>${e.price}</td>
              <td>${e.seat}</td>
              <td>${e.price * e.seat}</td>
              <td onclick="confirmDelete('${e.id}')" style="cursor:pointer; color:red;">Delete</td>
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
      confirmButtonText: "Yes, delete it!"
  }).then((result) => {
      if (result.isConfirmed) {
          deleteTicket(id);
      }
  });
};

const deleteTicket = async (id) => {
  try {
      let url = `http://localhost:3000/movie/${id}`;
      await fetch(url, { method: "DELETE" });
      fetchData(); // Refresh table after deletion
  } catch (error) {
      console.error("Error deleting data:", error);
  }
};

const FIND = async () => {
  let searchinp = document.querySelector("#searchinp").value;
  let url = "http://localhost:3000/movie";
  
  try {
      let res = await fetch(url);
      let data = await res.json();
      let filteredData = data.filter((e) =>
          e.language.toLowerCase().includes(searchinp.toLowerCase())
      );
      datashow(filteredData);
  } catch (error) {
      console.error("Error filtering data:", error);
  }
};

const userInput = async (event) => {
  event.preventDefault(); // Prevent form submission

  let inplanguage = document.querySelector("#lan").value;
  let inpdate = document.querySelector("#date").value;
  let inptime = document.querySelector("#time").value;
  let inpprice = document.querySelector("#price").value;
  let inpseat = document.querySelector("#seat").value;

  let url = "http://localhost:3000/movie";
  
  try {
      await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              seat: inpseat,
              date: inpdate,
              time: inptime,
              price: inpprice,
              language: inplanguage
          })
      });
      fetchData(); // Refresh table after adding data
  } catch (error) {
      console.error("Error adding data:", error);
  }
};

const formfill = async (id) => {
  let url = `http://localhost:3000/movie/${id}`;
  
  try {
      let res = await fetch(url);
      let data = await res.json();

      document.querySelector("#show").innerHTML = `
          <form onsubmit="return finalUpdate(event, '${id}')">
              <h1>Update Ticket</h1>
              <div>
                  Select Language:
                  <select id="uplan">
                      <option value="hindi" ${data.language === "hindi" ? "selected" : ""}>Hindi</option>
                      <option value="english" ${data.language === "english" ? "selected" : ""}>English</option>
                  </select>
              </div>
              <div>
                  Choose Date: <input type="date" id="update" value="${data.date}">
              </div>
              <div>
                  Choose Time: <input type="datetime-local" id="uptime" value="${data.time}">
              </div>
              <div>
                  Choose Price:
                  <select id="upPrice">
                      <option value="50">Rs. 0-100</option>
                      <option value="150">Rs. 101-200</option>
                      <option value="250" ${data.price == "250" ? "selected" : ""}>Rs. 201-300</option>
                      <option value="350">Rs. 301-400</option>
                      <option value="450">Rs. 401-500</option>
                  </select>
              </div>
              <div>
                  Choose Seats:
                  <select id="upseat">
                      ${[...Array(10).keys()].map(i => `<option value="${i+1}" ${data.seat == (i+1) ? "selected" : ""}>${i+1}</option>`).join("")}
                  </select>
              </div>
              <input type="submit" value="Update Ticket">
          </form>
      `;
  } catch (error) {
      console.error("Error fetching update data:", error);
  }
};

const finalUpdate = async (event, id) => {
  event.preventDefault();

  let inplan = document.querySelector("#uplan").value;
  let inpdate = document.querySelector("#update").value;
  let inptime = document.querySelector("#uptime").value;
  let inpprice = document.querySelector("#upPrice").value;
  let inpseat = document.querySelector("#upseat").value;

  let url = `http://localhost:3000/movie/${id}`;
  
  try {
      await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              seat: inpseat,
              date: inpdate,
              time: inptime,
              price: inpprice,
              language: inplan
          })
      });
      fetchData(); // Refresh table after update
      document.querySelector("#show").innerHTML = "";
  } catch (error) {
      console.error("Error updating data:", error);
  }
};

// Fetch data when the page loads

fetchData();

