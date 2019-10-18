// Add code to read and set any environment variables with the dotenv package
require("dotenv").config();

// import the `keys.js` file and store it in a variable.
// Spotify API call
let keys = require("./keys.js");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
let fs = require("fs");
let BiT = require("./BIT");
let bit = new BiT();
let OMDB = require("./OMDB");
let omdb = new OMDB();
let search = process.argv[2];
let term = process.argv.slice(3).join(" ");



///### BONUS
// Next we append the text into the "log.txt" file.

const appendFile = function(text) {
  fs.appendFile("log.txt", text, function(err) {
  
    // If an error was experienced we will log it.
    if (err) {
      console.log(err);
    }
  
    // If no error is experienced, we'll log the phrase "Content Added" to our node console.
    else {
      console.log("Content Added!");
    }
  
  });
  
  };
// const readFile = function(){
//   // This block of code will read from the "random.txt" file.

// });
// };
// function to make Call to Spotify and return result
const findSong = function (song) {
  spotify
    .search({ type: 'track', query: song })
    .then(function (response) {
      let data = response.tracks.items[0]
      console.log(data.album.name);
      let songData = [
        "Artist:  " + data.album.artists[0].name,
        "Song Name: " + data.name,
        "Song preview link: " + data.album.external_urls.spotify,
        "Album:  " + data.album.name,
      ].join("\n\n");
      console.log(songData);
      appendFile(process.argv);
      appendFile(songData);
    })
    .catch(function (err) {
      console.log(err);
    });
};

// if input = concert this, connect to bands in town API and display Results
if (search === "concert-this") {
  console.log("Searching for Bands in Town!");
  bit.findBand(term);
}

// if input = spotify-this-song, search for song in API and display Results
else if (search === "spotify-this-song") {
  console.log("Searching for this song!");
  if (term) {
    findSong(term);
  }
  else {
    findSong("echoes");
  }
}

// if input =  movie-this, go to OMDB API and display results,
else if (search === "movie-this") {
  console.log("Searching for this movie!");
  if (term) {
    omdb.findMovie(term);
  }
  else {
    omdb.findMovie("Mr._Nobody");
  };
}

// If  input = do what it says read "random.txt" and run it on findSong()
else if (search === "do-what-it-says") {
  console.log("Do what it says!");
  fs.readFile("random.txt", "utf8", function(error, data) {

    // If the code experiences any errors it will log the error to the console.
    if (error) {
      return console.log(error);
    }
  
    // We will then print the contents of data
    console.log(data);
  
    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");
  
    // We will then re-display the content as an array for later use.
    console.log(dataArr);
    findSong(dataArr[1]);
  
  });
  
   
}
;


