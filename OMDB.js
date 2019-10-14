let axios = require("axios");

let moment = require("moment");

//This will search the Bands in Town Artist Events API

let OMDB = function () {
    this.findMovie = function (movie) {
        const URL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
        axios.get(URL).
        then(function (response) {

            let data = response.data;
            if(data){
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
                console.log(movieData)
            }
            else{
               console.log("Sorry it looks like this movie is not existant!!");
            };
            
        });
    };
};

OMDB();

module.exports = OMDB

