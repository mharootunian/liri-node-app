require("dotenv").config();
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);

let args = process.arg

switch (args) {
	case "concert-this":
	break;

	case "spotify-this-song":
	break;

	case "movie-this":
	break;

	case "do-what-it-says":
	break;
}sw
