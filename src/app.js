let city = "New York";
let apiKey = "0f5f0e8d2874c9d8753ec860a7742a34";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&units=metric`;
console.log(apiUrl);
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
function showTemperature(response) {
  console.log(response.data);
  let temperatureData = document.querySelector("#cityTemperature");
  temperatureData.innerHTML = Math.round(response.data.main.temp);
  let cityName = document.querySelector("#city");
  cityName.innerHTML = response.data.name;
  let weatherDescription = document.querySelector("#description");
  weatherDescription.innerHTML = capitalize(
    response.data.weather[0].description
  );
  document.querySelector(
    "#humidity"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector("#wind").innerHTML = `${Math.round(
    response.data.wind.speed
  )}km/h`;
}
https: axios.get(apiUrl).then(showTemperature);

let currentDate = document.querySelector("#date");
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
currentDate.innerHTML =
  `${day}` +
  " " +
  ("0" + now.getHours()).slice(-2) +
  ":" +
  ("0" + now.getMinutes()).slice(-2);
