let Spotify = require("node-spotify-api");
require("dotenv").config();


let spotify = new Spotify({
	id: process.env.SPOTIFY_ID,
	secret: process.env.SPOTIFY_SECRET
});

let args = process.argv

spotify.search({
	type: "track",
	query: "digital bath deftones"
	},
	function(err, data) {
		if (err) 
			return console.log("Error: " + err);

	console.log(data);
	console.log(data.tracks.items[1]);
});