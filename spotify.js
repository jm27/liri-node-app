let Spotifycall = function () {
    this.findSong = function (song) {
        spotify
  .search({ type: 'track', query: song })
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
};

Spotifycall();

module.exports = Spotifycall