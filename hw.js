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