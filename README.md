liri-node-app
======

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

[LIRI_NODE-APP GITHUB LINK](https://github.com/jm27/liri-node-app "LIRI's REPO Homepage")
======

LIRI is divided into four JavaScript files(BIT.js, key.js, liri.js, OMDB.js). Contains a .env file and a .gitignore file. A random.txt file and a log.txt file. Also a folder named imgs with screenshoots of the app working and instructions. All inside a folder called liri-node-app.

# Instructions

First in order to run the app you must be sure that you have installed the node modules that are needed to run the app.

Type: "npm-init", inside folder's terminal/bash window.
![NPM-INIT](https://github.com/jm27/liri-node-app/imgs/node-init.png "1")


Then type: "npm install" and make sure all dependencies are installed inside package.json file(axios, dotenv, fs, moment, node-spotify-api)

If any of the dependencies are missing you can just type inside folder's terminal/bash window: "npm install axios" . Change "axios" for each dependency that the app is missing.


LIRI is able to tell the user the result of a command typed inside the folders terminal/bash window,

LIRI has the following optional commands:

1. `node liri.js concert-this <artist/band name here>`

   * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

     * Name of the venue

     * Venue location

     * Date of the Event (use moment to format this as "MM/DD/YYYY")

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window

     * Artist(s)

     * The song's name

     * A preview link of the song from Spotify

     * The album that the song is from

   * If no song is provided then it will default to "Wish you were here" by Pink Floyd.

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

4. `node liri.js do-what-it-says`

   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

     * Edit the text in random.txt to test out the feature for movie-this and concert-this.

* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.


4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app


# Technologies

LIRI app was written inside a Javascript file, it uses node.js and npm modules libraries to run.
7. State your role in the app development
