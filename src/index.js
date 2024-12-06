function searchButton(event) {
  event.preventDefault();
  let searchIn = document.querySelector("search-element");
  let theCityelement = document.querySelector("#the-city");
  theCityelement.innerHTML = searchIn.value;
}
let inputElement = document.querySelector("search-element");
inputElement.addEventListener("submit", searchButton);
