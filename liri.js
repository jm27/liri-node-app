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
let OMDB = require("./OMDB");
let omdb = new OMDB();
let search = process.argv[2];
let term = process.argv.slice(3).join(" ");


// if input = concert this, connect to bands in town API and display Results
if (search === "concert-this") {
  console.log("Searching for Bands in Town!");
  bit.findBand(term)
}

// if input = spotify-this-song, search for song in API and display Results
else if (search === "spotify-this-song") {
  console.log("Searching for this song!");
spotify
  .search({ type: 'track', query: term })
  .then(function(response) {
    let data = response.tracks.items[0]
    console.log(data.album.name);
    let songData = [
      "Artist:  " + data.album.artists[0].name,
      "Song Name: " + data.name,
      "Song preview link: " + data.album.external_urls.spotify,
      "Album:  " + data.album.name,
  ].join("\n\n");
    console.log(songData);
  })
  .catch(function(err) {
    console.log(err);
  });
} 

// if input =  movie-this, go to OMDB API and display results,
else if (search === "movie-this") {
  console.log("Searching for this movie!");
  if(term){
    omdb.findMovie(term);
  }
  else{
    omdb.findMovie("Mr._Nobody");
  };
} 
else if (search === "do-what-it-says") {
  console.log("Do what it says!");
  bit.findBand(term)
} 
;

