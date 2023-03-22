
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function buttonFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }




//class at 30 minutes 20-3-23

//Fetching Data
//let data =[{"id": 0,"name": "Username","email": "address"}]

//async function getResponse(){
   // const response= await
   let container = document.getElementById("container");
   let tableDiv = document.getElementById("table");



   window.onload = function (event){
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    
    
    else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayChart(data);
  })
  .catch((error) => console.error("FETCH ERROR:", error));

    




//Displaying Data


let i = 0;
while (i < event.length){
  console.log(data[i]);
  i++
 
}

  function displayChart(data) {

data.forEach(function(data){
  //counsole.log(data);




  
  let tableBody = document.getElementById('tableBody');
  tableBody.innerHTML =+ '<tr><td>' + data.id + '</td><td>' + data.name +'</td><td>' + '</td><td>' + data.username +'</td><td>' + data.Email + '</td><td>' + data.address +'</td><td></tr>';

  console.log(data)
  
});



  
    //const individualName = name.str;
    const heading = document.createElement("h1");
    heading.innerHTML = tableDiv;
    tableDiv.appendChild(heading);
  };
   }
 