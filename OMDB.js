let axios = require("axios");

let fs = require("fs");


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
      
//This will search the OMDB API

let OMDB = function () {
    this.findMovie = function (movie) {
        const URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        axios.get(URL).
        then(function (response) {

            let data = response.data;
            let movieData = [
                "Name Of Movie:  " + data.Title,
                "Release Date: " + data.Released,
                "IMDB Rating: " + data.imdbRating,
                "Rotten Tomatoes Rating: "+ data.Ratings[1].value, 
                "Country Of Production: " + data.Country,
                "Language: " + data.Language,
                "Plot: " + data.Plot,
                "Actors: " + data.Actors,
            ].join("\n\n");
            if(data){
                console.log(movieData);
                appendFile(process.argv);
                appendFile(movieData)
            }
            else{
               console.log("Sorry it looks like this movie is not existant!!");
            };
            
        });
    };
};

OMDB();

module.exports = OMDB

