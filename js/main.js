// Define variables for accessing Giphy's API & add to DOM
const base_url = "https://api.giphy.com/v1/gifs/search";
const api_key = "OLKuCkrrmFhhJxSa9yLH2FzJvXJOuKQZ";
let query = document.querySelector('#giphySearchResults').textContent;
let limit = 5;

let fetch_url = `${base_url}?q=${query}&api_key=${api_key}&limit=${limit}`;

const gifSearch = document.querySelector('#gifSearch');
const giphySearchResults = document.querySelector('#giphySearchResults');

gifSearch.addEventListener('keypress', getGiphyData);

function getGiphyData() {
  // console.log("Key pressed.");
  fetch(fetch_url)
    .then(response => response.json())
    .then(data => console.log(data));
}

