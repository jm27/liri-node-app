// Add code to read and set any environment variables with the dotenv package
//require("dotenv").config();

// import the `keys.js` file and store it in a variable.
// Spotify API call
let keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
let axios = require("axios");
let BiT = require("./BIT");
let bit = new BiT();
let search = process.argv[2];
let term = process.argv.slice(3).join(" ");



if (search === "concert-this") {
  console.log("Searching for Bands in Town!");
  bit.findBand(term)
}
else if (search === "spotify-this-song") {
  console.log("Searching for this song!");
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    let data = response.tracks.items[0]
    console.log(data);
    let songData = [
      "Artist:  " + data.album.artists[0].name,
      "Song Name: " + data.name,
      "Song preview link: " + data.album.external_urls[0].spotify,
      "Album:  " + data,
  ].join("\n\n");
    console.log(songData);
  })
  .catch(function(err) {
    console.log(err);
  });
} 
else if (search === "movie-this") {
  console.log("Searching for this movie!");
  bit.findBand(term)
} 
else if (search === "do-what-it-says") {
  console.log("Do what it says!");
  bit.findBand(term)
} 
;

