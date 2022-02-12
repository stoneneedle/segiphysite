// Define variables for accessing Giphy's API & select DOM elements
const base_url = "https://api.giphy.com/v1/gifs/search";
const rand_url = "https://api.giphy.com/v1/gifs/random";
const api_key = "OLKuCkrrmFhhJxSa9yLH2FzJvXJOuKQZ";
let numResults = "5";
let randResults = "5";

// const giphySearchResults = document.querySelector('#giphySearchResults');
// const giphyRandResults = document.querySelector('#giphyRandResults');

gifSearch.addEventListener('keypress', getGiphyPreview);
randGifTag.addEventListener('keypress', randGiphyPreview);

// Helper function to build div and image
function createGiphyImgDiv(imgObj) {
  let gif_div = document.createElement('div');
  gif_div.setAttribute("class", "p-1");
  let gifImg = document.createElement('img');
  gifImg.setAttribute("src", imgObj.images.downsized.url);
  gifImg.setAttribute("class", "img-fluid img-thumbnail");
  gifImg.setAttribute("alt", imgObj.id)
  gifImg.style.maxWidth = "200px";
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
      data.data.forEach(function(value) {
        let gifDiv = createGiphyImgDiv(value);
        giphySearchResults.appendChild(gifDiv);
      });
    });
}

function randGiphyPreview() {
  numResults = document.querySelector('#randNumResults').value;
  giphyRandResults.innerHTML = "";
  const randGifTag = document.getElementById('randGifTag');
  let tag = encodeURI(randGifTag.value);
  fetch_url = `${rand_url}?tag=${tag}&api_key=${api_key}&limit=${numResults}`;

  fetch(fetch_url)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      let gifDiv = createGiphyImgDiv(data.data);
      giphyRandResults.appendChild(gifDiv);
      });
}

const giphySearchBtn = document.querySelector('#giphySearchBtn');
giphySearchBtn.addEventListener('click', addGiphyData);

// Add Giphy data from typed query to a panel below
function addGiphyData() {
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
    newPanel.setAttribute("class", "d-flex flex-wrap bg-primary rounded");

    data.data.forEach(function(value) {
      let gifDiv = createGiphyImgDiv(value);
      newPanel.appendChild(gifDiv);
    });

    newCol.appendChild(newPanel);
    divRow.appendChild(newCol);
  });
}

const giphyRandBtn = document.querySelector('#giphyRandBtn');
giphyRandBtn.addEventListener('click', addRandGifs);

function addRandGifs() {
  numResults = document.querySelector('#randNumResults').value;
  const randGifTag = document.getElementById('randGifTag');
  let tag = encodeURI(randGifTag.value);
  fetch_url = `${rand_url}?q=${tag}&api_key=${api_key}`;

  let divRow = document.querySelector('.row');
  let newCol = document.createElement('div');
  newCol.setAttribute("class", "col-12 col-sm-6 p-3");
  let newPanel = document.createElement('div');
  newPanel.setAttribute("class", "d-flex flex-wrap bg-warning rounded");

  for (let i = 0; i < parseInt(numResults); i++) {
    fetch(fetch_url)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      let randImgDiv = createGiphyImgDiv(data.data);
      newPanel.appendChild(randImgDiv);
    });
  }
  newCol.appendChild(newPanel);
  divRow.appendChild(newCol);
}
