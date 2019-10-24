require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("./spotify.js")
//const spotify = new Spotify(keys.spotify);

let args = process.argv,
	command = args[2],
	parameter = args[3]

switch (command) {
	case "concert-this":
		
	break;

	case "spotify-this-song":
		if (parameter)
			Spotify(parameter)
		if (!parameter)
			Spotify("The Sign by Ace of Base")
	break;

	case "movie-this":
	break;

	case "do-what-it-says":
	break;
}