const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&units=metric&appid=c5060ebccc4d3361e2f24328c6851710";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service !", undefined);
    } else if (body.message) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Currently " +
          body.main.temp +
          " Celcius  Now ! Minimum Temperature: " +
          body.main.temp_min +
          " Maximum Temperature: " +
          body.main.temp_max +
          " Weather: " +
          body.weather[0].description
      );
    }
  });
};

module.exports = forecast;
