let city = "New York";
let apiKey = "0f5f0e8d2874c9d8753ec860a7742a34";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&units=metric`;

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
function showTemperature(response) {
  console.log(response.data);
  let temperatureData = document.querySelector("#cityTemperature");
  let cityName = document.querySelector("#city");
  let weatherDescription = document.querySelector("#description");
  let icon = document.querySelector("#icon");
  let iconId = response.data.weather[0].icon;
  let iconUrl = `http://openweathermap.org/img/wn/${iconId}@2x.png`;
  icon.setAttribute("src", iconUrl);
  temperatureData.innerHTML = Math.round(response.data.main.temp);
  cityName.innerHTML = response.data.name;
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
