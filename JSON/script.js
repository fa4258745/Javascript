
// let fetchData = async () => {
//   let url = "http://localhost:3000/movie";
//   let res = await fetch(url);
//   console.log(res);
//   let data = await res.json();
//   console.log(data);
// };

// fetchData();
// let shown = document.querySelector("#show");
// data.map((e) => {
//   shown.innerHTML += `<table>
//    <tr>
//    <td> 
//    ${e.name}
//    </td>
//    <td> 
//    ${e.year}
//    </td>
   
//    </tr>
   
//    </table>
//    `;
// });



// // by deaful its nature is to get the data from the server
// // if we want to post the data to the server we have to pass the second argument
// // to the fetch function 



let fetchData = async () => {
  try {
    let url = "http://localhost:3000/movie";
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    let shown = document.querySelector("#show");

    data.movie.forEach((e) => {
      shown.innerHTML += `
        <tr>
          <td>${e.name}</td>
          <td>${e.age}</td>
          <td>${e.genre}</td>
        </tr>
      `;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();


