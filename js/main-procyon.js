// Define variables for accessing Giphy's API & add to DOM
const base_url = "https://api.giphy.com/v1/gifs/search";
const api_key = "OLKuCkrrmFhhJxSa9yLH2FzJvXJOuKQZ";
const gifSearch = document.getElementById('gifSearch');
let query = gifSearch.value;
let limit = 5;

let fetch_url = `${base_url}?q=${query}&api_key=${api_key}&limit=${limit}`;

const giphySearchResults = document.querySelector('#giphySearchResults');
const debugPane = document.querySelector('#debugPane');

debugPane.textContent = fetch_url;

gifSearch.addEventListener('keypress', getGiphyData);

function getGiphyData() {
  query = gifSearch.value;
  debugPane.textContent += fetch_url;
  // console.log("Key pressed.");
  fetch(fetch_url)
    .then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data); // Debug
      data.data.forEach(function(value) {
        let gifDiv = document.createElement('div');
        gifDiv.textContent = "Test";
        giphySearchResults.appendChild(gifDiv);
      })
    }
      


    );
    // .then(data => console.log(data));
}

