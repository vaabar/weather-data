function searchCity(city) {
  let apiKey = "o8c4364da7btfb6f80cb313baf6dceea";
  let apiUrl =
    `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiUrl}&units${metric};
`}

function searchButton(event) {
  event.preventDefault();
  let searchIn = document.querySelector("search-element");
  let theCityelement = document.querySelector("#the-city");
  theCityelement.innerHTML = searchIn.value;
  searCity{searchIn.value};
}
let inputElement = document.querySelector("search-element");
inputElement.addEventListener("submit", searchButton);
