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
			console.log(data.tracks.items[0]);
		});
}

module.exports = findSong;