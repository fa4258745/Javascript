// const fetchData = async () => {
//   try {
//       let url = "http://localhost:3000/movie";
//       let res = await fetch(url,{method:"GET"});
//       let data = await res.json();
//       datashow(data); // Display fetched data
//      paginationData(data);
//   } catch (error) {
//       console.error("Error fetching data:", error);
//   };
// };



const fetchData = async () => {
    try {
        let url = "http://localhost:3000/movie";
        let res = await fetch(url);
        let data = await res.json();
        datashow(data)
        paginationData(data); // Now correctly passing data
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

let paginationData = (data) => {
    $('#pages').pagination({
        dataSource:data,
        pageSize: 2,
        showGoInput: true,
        showGoButton: true,
        callback: function(data) {
            datashow(data)
        }
      })
};



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
              <td onclick="confirmDelete('${e.id}')" style="cursor:pointer; color:red;">Update</td>
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

// const FIND = async () => {
//   let searchinp = document.querySelector("#searchinp").value;
//   let url = "http://localhost:3000/movie";
  
//   try {
//       let res = await fetch(url);
//       let data = await res.json();
//       let filteredData = data.filter((e) =>
//           e.language.toLowerCase().includes(searchinp.toLowerCase())
//       );
//       datashow(filteredData);
//   } catch (error) {
//       console.error("Error filtering data:", error);
//   }
// };



const FIND = async () => {
    let searchinp = document.querySelector("#searchinp").value;
    let url = "http://localhost:3000/movie";

    try {
        let res = await fetch(url);
        let data = await res.json();
        let filteredData = data.filter((e) =>
            e.language.toLowerCase().includes(searchinp.toLowerCase())
        );

        // Clear previous pagination before applying new one
        $('#pages').empty(); // This removes previous pagination instead of destroy()

        if (filteredData.length === 0) {
            document.querySelector("#dataDisplay").innerHTML = "<tr><td colspan='7'>No data found</td></tr>";
            return;
        }

        $('#pages').pagination({
            dataSource: filteredData,
            pageSize: 2,
            showGoInput: true,
            showGoButton: true,
            callback: function(data) {
                datashow(data);
            }
        });

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
  let res=await fetch(url,{method:"GET"})
  let data=await res.json()
    console.log(data)
  let formdata = `
  
  
  
  
  
  <div class="container-ticket-flex">

<form onsubmit="return userInput(event)">
    <h1>Book Ticket</h1>
    <div class="box-01">
        Select Language:
        <select id="lan">
                <option value="${data.language}" selected>Hindi</option>
                <option value="english">English</option>
            </select>
        </div>  
        <div class="box-01">
            Choose Date:
            <input type="date" id="date">
        </div>
        <div class="box-01">
            Choose Time:
            <input type="datetime-local" id="time">
        </div>
        <div class="box-01">
            <label>Choose Price:</label>
            <select id="price">
                <option value="50">Rs. 0-100</option>
                <option value="150">Rs. 101-200</option>
                <option value="250">Rs. 201-300</option>
                <option value="350">Rs. 301-400</option>
                <option value="450">Rs. 401-500</option>
            </select>
        </div>
        <div class="box-01">
            Choose Seats:
            <select id="seat">
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
        <h2>Total amount:</h2>
        <input type="submit" value="Book Ticket">
    </form>
 
    
</div>

    
  
  
  
  
  
  
  
  
  `
  document.querySelector("#show").innerHTML=formdata



}
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

