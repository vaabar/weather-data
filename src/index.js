function updateWeather(response) {
  let tempreatureInput = document.querySelector("number-temp");
  let temperature = response.data.city.temprature.current;
  tempreatureInput.innerHTML = Math.round(temperature);
  let theCityelement = document.querySelector("#the-city");

  theCityelement.innerHTML = response.data.city;
  tempreatureInput.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "o8c4364da7btfb6f80cb313baf6dceea";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

function searchButton(event) {
  event.preventDefault();
  let searchIn = document.querySelector("#search-input");
  searchCity(searchIn.value);
}
let inputElement = document.querySelector("#search-form");
inputElement.addEventListener("submit", searchButton);
