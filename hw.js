
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
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








fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    Object(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));


  function displayChart(data) {
    const name = data.name[0];
   
    const tableDiv = document.getElementById("table");
  
    const individualName = name.str;
    const heading = document.createElement("h1");
    heading.innerHTML = tableDiv;
    tableDiv.appendChild(heading);
  }