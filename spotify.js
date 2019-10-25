let Spotify = require("node-spotify-api");
require("dotenv").config();

let spotify = new Spotify({
	id: process.env.SPOTIFY_ID,
	secret: process.env.SPOTIFY_SECRET
});

let args = process.argv

function findSong(songTitle) {
	spotify.search({
		type: "track",
		query: songTitle
	},
		function (err, data) {
			if (err)
				return console.log("Error: " + err);

			//console.log(data);
			//console.log(data.tracks.items);
			console.log("Artists: " + data.tracks.items[0].album.artists[0].name)
			console.log("Song: " + data.tracks.items[0].name)
			console.log("Preview URL: " + data.tracks.items[0].preview_url)
			console.log("Album: " + data.tracks.items[0].album.name)
		});
}

module.exports = findSong;

//artists
//song name
//preview link of song from spotify
//album that song is from