require("dotenv").config();
const keys = require("./keys.js");
const Spotify = require("./spotify.js")
const OMDB = require("./omdb.js")
const fs = require("fs")
//const spotify = new Spotify(keys.spotify);

let args = process.argv,
	command = args[2],
	parameter = args[3]

function doTheThing(command, parameter) {

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
			if (parameter)
				OMDB(parameter)
			if (!parameter)
				OMDB("Mr. Nobody")
			break;

		case "do-what-it-says":
			break;

	}
}

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
		if (parameter)
			OMDB(parameter)
		if (!parameter)
			OMDB("Mr. Nobody")
		break;

	case "do-what-it-says":
		fs.readFile("./random.txt", "utf8", (err, data) => {
			if (err)
				return console.log(err)

			let arr = data.split("\n")
			let rand = Math.floor(Math.random() * arr.length)
			let chosenTask = arr[rand]
			chosenTask = chosenTask.split(",")
			doTheThing(chosenTask[0], chosenTask[1])

		})
		break;
}