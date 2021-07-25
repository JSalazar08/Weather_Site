//step 1: Call API
// step 2: receive data
// step 3: pick data
// step 4: attach to variables 
// step 5: show var on html
// API Key:c9fea5e64f4b73cff1fc8c14bc4c5a23
//api.openweathermap.org/data/2.5/weather?q=Phoenix&appid=4fe6659c8edb378470c4ecd33a8d2643

var getCityWeather = function(city) {
    var apiUrl = "api.openweathermap.org/data/2.5/weather?q=Chicago&appid=4fe6659c8edb378470c4ecd33a8d2643"  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };


