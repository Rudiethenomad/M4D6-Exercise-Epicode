/*
var container = document.getElementById("container");
var url = "http://dummy.restapiexample.com/api/v1/employees";
fetch(url).then(function(response) {
  return response.json();
}).then(function(data) {
  data.data.forEach(function(count) {
    console.log(count);
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML += '<tr><td>' + count.id + '</td><td>' + count.employee_name + '</td></tr>';
  })
}).catch(function() {
  console.log("Booo");
});
container.innerHTML = '</table></div>'
*/

const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>"; 
}