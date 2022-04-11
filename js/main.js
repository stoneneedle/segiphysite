// Define variables for accessing Giphy's API & select DOM elements
const base_url = "https://api.giphy.com/v1/gifs/search";
const api_key = "OLKuCkrrmFhhJxSa9yLH2FzJvXJOuKQZ";
let numResults = "5";
const giphySearchForm = document.querySelector(".giphySearchForm-js");

giphySearchForm.addEventListener("submit", addGiphyData);

// Add Giphy data from typed query to a panel below
function addGiphyData(e) {
  e.preventDefault();

  const gifSearch = encodeURI(document.querySelector(".gifSearch-js").value);

  if (gifSearch != "") {
    numResults = document.querySelector(".numResults-js").value;
    let fetch_url = `${base_url}?q=${gifSearch}&api_key=${api_key}&limit=${numResults}`;
    let imgsDisplayDiv = ``;
    let giphySearchResults = document.querySelector(".giphySearchResults-js");

    fetch(fetch_url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.data.length != 0) {
          imgsDisplayDiv += `<div class="col-12 col-sm-12 p-3">
          <div class="d-flex flex-wrap bg-primary rounded p-3">`;

          data.data.forEach(function (imgObj) {
            imgsDisplayDiv += `<div class="p-3">
            <img class="img-fluid img-thumbnail" src="${imgObj.images.downsized.url}" alt="${imgObj.id}" width="200" />
            </div>`;
          });

          imgsDisplayDiv += `</div>
          </div>`;

          giphySearchResults.innerHTML = imgsDisplayDiv;
        }
        else {
          giphySearchResults.innerHTML = `<div class="col-12 col-sm-12 p-3">
          <div class="d-flex flex-wrap bg-primary rounded p-3">
          <div class="p-3"><p>Images unable to be displayed.</p></div>
          </div>
          </div>`;
        }
      });
  }
}
