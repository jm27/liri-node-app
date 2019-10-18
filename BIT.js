let axios = require("axios");

let moment = require("moment");

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
      


//This will search the Bands in Town Artist Events API

let BiT = function () {
    this.findBand = function (artist) {
        const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).
        then(function (response) {

            let data = response.data[0];
            let bandData = [
                "Name Of Venue:  " + data.venue.name,
                "Venue Location: " + data.venue.city + ", " + data.venue.region,
                "Date Of The Event: " + moment(data.datetime).format("MMM Do YY")  //moment(data.date(use moment to format this as "MM/DD/YYYY")
            ].join("\n\n");

            if(data){
                console.log(bandData)
                appendFile(process.argv);
                appendFile(bandData)
            }
            else{
               console.log("Sorry it looks like this band is not playing soon!!");
            };
            
        });
    };
};

BiT();

module.exports = BiT

