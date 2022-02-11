// Define variables for accessing Giphy's API & select DOM elements
const base_url = "https://api.giphy.com/v1/gifs/search";
const rand_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "OLKuCkrrmFhhJxSa9yLH2FzJvXJOuKQZ";
let numResults = "5";

const giphySearchResults = document.querySelector('#giphySearchResults');
const debugPane = document.querySelector('#debugPane');
gifSearch.addEventListener('keypress', getGiphyPreview);

// Helper function to build div and image
function createGiphyImgDiv(imgObj) {
  let gif_div = document.createElement('div');
  gif_div.setAttribute("class", "p-1");
  let gifImg = document.createElement('img');
  gifImg.setAttribute("src", imgObj.images.original.url);
  gifImg.setAttribute("class", "img-fluid img-thumbnail");
  gifImg.style.maxWidth = "100px";
  gif_div.appendChild(gifImg);
  return gif_div
}

// Preview Giphy data in giphySearchResults pane prior to clicking
function getGiphyPreview() {
  numResults = document.querySelector('#numResults').value;
  giphySearchResults.innerHTML = "";
  const gifSearch = document.getElementById('gifSearch');
  let query = encodeURI(gifSearch.value);
  let fetch_url = `${base_url}?q=${query}&api_key=${api_key}&limit=${numResults}`;

  fetch(fetch_url)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      // console.log(data); // Debug
      data.data.forEach(function(value) {
        let gifDiv = createGiphyImgDiv(value);
        giphySearchResults.appendChild(gifDiv);
      })
    });
}

const giphySearchBtn = document.querySelector('#giphySearchBtn');
giphySearchBtn.addEventListener('click', addGiphyData);

// Add Giphy data from typed query to a panel below
function addGiphyData(e) {
  numResults = document.querySelector('#numResults').value;
  const gifSearch = document.getElementById('gifSearch');
  let query = encodeURI(gifSearch.value);
  let fetch_url = `${base_url}?q=${query}&api_key=${api_key}&limit=${numResults}`;

  fetch(fetch_url)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
    let divRow = document.querySelector('.row');
    let newCol = document.createElement('div');
    newCol.setAttribute("class", "col-12 col-sm-6 p-3");
    let newPanel = document.createElement('div');
    // newPanel.style.maxWidth = "100%";
    newPanel.setAttribute("class", "d-flex flex-wrap bg-secondary rounded");

    data.data.forEach(function(value) {
      let gifDiv = createGiphyImgDiv(value);
      newPanel.appendChild(gifDiv);
    });

    newCol.appendChild(newPanel);
    divRow.appendChild(newCol);

    e.preventDefault();
  });
}
