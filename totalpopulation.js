// Solving problems using array functions on rest countries data.Print the total population of countries using reduce function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();

xhr.onload = function () {
   let data = JSON.parse(xhr.response);
 const totalpopulation=data.reduce((acc,country)=>(acc+country.population),0);
 console.log(`Total population of countries:${totalpopulation}`);
};
// Output:
// Total population of countries:7758589152