let fetchData = async () => {
  let url = "http://localhost:3000/movie";
  let res = await fetch(url);
  console.log(res);
  //data shown 
  let data =await res.json(data);
  console.log(data);
};

fetchData();











// by deaful its nature is to get the data from the server
// if we want to post the data to the server we have to pass the second argument
// to the fetch function
