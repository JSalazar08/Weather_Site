//step 1: Call API
// step 2: receive data
// step 3: pick data
// step 4: attach to variables 
// step 5: show var on html
//api.openweathermap.org/data/2.5/weather?q=City&appid=c9fea5e64f4b73cff1fc8c14bc4c5a23
2643
var getcityWeather = function(city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c9fea5e64f4b73cff1fc8c14bc4c5a23";
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        displayCity(data, city);
      });
    });
  };

  var cityFormEl = document.querySelector("#searchInput");
  var nameInputEl = document.querySelector("#city");

  var formSubmitHandler = function(event) {
    event.preventDefault();
    var city = nameInputEl.value.trim();

if (city) {
    getcityWeather(city);
  nameInputEl.value = "";
} else {
  alert("Please enter a city");
}
    console.log(event);
  };

 cityFormEl.addEventListener("submit", formSubmitHandler);

 var displayCity = function(city, searchTerm) {
    cityContainerEl.textContent = "";
citySearchTerm.textContent = searchTerm;
// loop over city
for (var i = 0; i < city.length; i++) {
    // format city name
    var cityName = city[i].owner.login + "/" + city[i].name;
  
    // create a container for each city
    var cityEl = document.createElement("div");
    cityEl.classList = "list-item flex-row justify-space-between align-center";
  
    // create a span element to hold city name
    var titleEl = document.createElement("span");
    titleEl.textContent = cityName;
  
    // append to container
    cityEl.appendChild(titleEl);
  
    // append container to the dom
    cityContainerEl.appendChild(cityEl);
  }
  };

  var cityContainerEl = document.querySelector("#city-container");
var citySearchTerm = document.querySelector("#city-search-term");