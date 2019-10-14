let axios = require("axios");

let moment = require("moment");

//This will search the Bands in Town Artist Events API

let BiT = function () {
    this.findBand = function (artist) {
        const URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).
        then(function (response) {

            let data = response.data[0];
            if(data){
                let bandData = [
                    "Name Of Venue:  " + data.venue.name,
                    "Venue Location: " + data.venue.city + ", " + data.venue.region,
                    "Date Of The Event: " + moment(data.datetime).format("MMM Do YY")  //moment(data.date(use moment to format this as "MM/DD/YYYY")
                ].join("\n\n");
                console.log(bandData)
            }
            else{
               console.log("Sorry it looks like this band is not playing soon!!");
            };
            
        });
    };
};

BiT();

module.exports = BiT

