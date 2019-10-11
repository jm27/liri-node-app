// Add code to read and set any environment variables with the dotenv package

require("dotenv").config();

// import the `keys.js` file and store it in a variable.
let keys = require("./keys.js");
let axios = require("axios");

const OMDB = function(){
  let divider = "\n------------------------------------------------------------\n\n";
  let artist = process.argv[2];
  
  const URL ="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
}


// Spotify API call
const Spotify = require('node-spotify-api');

const spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'happy' }, function (err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

  console.log(data);
});
