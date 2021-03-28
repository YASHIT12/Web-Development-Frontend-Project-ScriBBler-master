let weather = {
  apiKey: "47d50ab4c69ebbdf0ed781d2ee6aa1b4",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  displayWeather:function(data){
      
  }
};
