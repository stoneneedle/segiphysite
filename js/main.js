// Define variables for accessing Giphy's API & select DOM elements
const base_url = "https://api.giphy.com/v1/gifs/search";
const api_key = "OLKuCkrrmFhhJxSa9yLH2FzJvXJOuKQZ";
let limit = 5;

const giphySearchResults = document.querySelector('#giphySearchResults');
const debugPane = document.querySelector('#debugPane');
gifSearch.addEventListener('keypress', getGiphyPreview);

// Preview Giphy data in giphySearchResults pane prior to clicking
function getGiphyPreview() {
  giphySearchResults.innerHTML = "";
  const gifSearch = document.getElementById('gifSearch');
  let query = encodeURI(gifSearch.value);
  let fetch_url = `${base_url}?q=${query}&api_key=${api_key}&limit=${limit}`;

  fetch(fetch_url)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      // console.log(data); // Debug
      data.data.forEach(function(value) {
        let gifDiv = document.createElement('div');
        gifDiv.setAttribute("class", "p-1");
        let gifImg = document.createElement('img');
        gifImg.setAttribute("src", value.images.original.url);
        gifImg.setAttribute("class", "img-fluid img-thumbnail");
        gifImg.style.maxWidth = "100px";
        gifDiv.appendChild(gifImg);
        giphySearchResults.appendChild(gifDiv);
      })
    });
}

const giphySearchBtn = document.querySelector('#giphySearchBtn');
giphySearchBtn.addEventListener('click', addGiphyData);

// Add Giphy data from typed query to a panel below
function addGiphyData(e) {
  const gifSearch = document.getElementById('gifSearch');
  let query = encodeURI(gifSearch.value);
  let fetch_url = `${base_url}?q=${query}&api_key=${api_key}&limit=${limit}`;

  fetch(fetch_url)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    // console.log(data); // Debug
    let divRow = document.querySelector('.row');
    let newCol = document.createElement('div');
    newCol.setAttribute("class", "col-12 col-sm-6 p-3");
    let newPanel = document.createElement('div');
    newPanel.setAttribute("class", "p-3 bg-secondary rounded");

    data.data.forEach(function(value) {
      let gifDiv = document.createElement('div');
      gifDiv.setAttribute("class", "p-1");
      let gifImg = document.createElement('img');
      gifImg.setAttribute("src", value.images.original.url);
      gifImg.setAttribute("class", "img-fluid img-thumbnail");
      gifImg.style.maxWidth = "100px";
      gifDiv.appendChild(gifImg);
      newPanel.appendChild(gifDiv);
    });

    newCol.appendChild(newPanel);
    divRow.appendChild(newCol);

    e.preventDefault();
  });
}
