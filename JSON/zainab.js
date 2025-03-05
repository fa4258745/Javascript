
// For getting data & for pagination
let fetchData=async()=>{
    let url="http://localhost:3000/flight"
    let res= await fetch(url,{method:"GET"})
    let data = await res.json()
    console.log(data)
    paginationData(data)
  }
  // For filtering data by search
  let searchh=async()=>{
    let searchinp=document.querySelector("#searchinp").value.toLowerCase()
    let url="http://localhost:3000/flight"
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    let filterdata=data.filter((e)=>{
      return e.from.toLowerCase().includes(searchinp)
      
    })
    datashow(filterdata)
  }
  // pagination library code :
  let paginationData=(data)=>{
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
  // Fetching data as per filteration :
  let datashow=(data)=>{
    let show=document.querySelector("#show")
    show.innerHTML=""
    data.map((e)=>{
      return show.innerHTML+=`<tbody>
      <td>${e.from}</td>
      <td>${e.to}</td>
      <td>${e.departure}</td>
      <td onclick="confirmdeletee('${e.id}')">DELETE</td>
      <td onclick="formfill('${e.id}')">Update</td>
      </tbody>`
    }) 
  }
  // For DELETING DATA :
    let deletee=(id)=>{
    let url=http://localhost:3000/flight/${id}
    fetch(url,{method:"DELETE"})
  }
  // FOR SWEET ALERT :
  let confirmdeletee = (id) => {
  
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
  
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            }).then(() => {
                deletee(id)
            })
        }
    });
  }
  // FOR POSTING DATA :
  let userInput = () => {
    let inpfrom = document.querySelector("#from").value
    let inpto = document.querySelector("#to").value
    let inpDeparture=document.querySelector("#departure").value
    let formattedDate = inpDeparture.split("-").reverse().join("/");
  //  console.log(inpDeparture)
    let url = "http://localhost:3000/flight"
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            from: inpfrom,
            to: inpto,
            departure:formattedDate
            
        })
    })
    location.href = "/USERACCOUNT/user.html"
    return false
  }
  // Pre Filled function
  let formfill=async(id)=>{
    let url=http://localhost:3000/flight/${id}
  let res=await fetch(url,{method:"GET"})
  let data=await res.json()
    console.log(data)
  let formdata = `
  Enter from:<input type="text" id="upfrom" value="${data.from}"<br><br>
  Enter from:<input type="text" id="upto" value="${data.to}"<br><br>
  Enter from:<input type="text" id="updeparture" value="${data.departure}"<br><br>
  
      <input type="submit" value="edit" onclick="return finalUpdate('${id}')">
  `
  document.querySelector("#show").innerHTML=formdata
  }
  // For Update :
  let finalUpdate=(id)=>{
    let inpfrom= document.querySelector("#upfrom").value
    let inpto = document.querySelector("#upto").value
    let formattedDate = document.querySelector("#updeparture").value
    
    let url = http://localhost:3000/flight/${id}
    fetch(url, {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
          from: inpfrom,
          to: inpto,
          departure:formattedDate
  
           
        })
    })
    // location.href = "json.html"
    return false
  }