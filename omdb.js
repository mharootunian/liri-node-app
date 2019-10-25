const ax = require("axios")
const apiKey = process.env.OMDB_KEY

function searchMovie(query) {
    ax.get(`http://www.omdbapi.com/?t=${query}&y=&plot=short&apikey=${apiKey}`).then( (res) => {
        console.log(`Title: ${res.data.Title}`)
        console.log(`Release Year: ${res.data.Year}`)
        console.log(`IMDB Rating: ${res.data.imdbRating}`)
        if (res.data.Ratings[1].Value){
            console.log(`Rotten Tomatoes Score: ${JSON.stringify(res.data.Ratings[1].Value)}`)
        } else {
            console.log('Rotten Tomatoes Score: No Data Available')
        }
        console.log(`Country: ${res.data.Country}`)
        console.log(`Language: ${res.data.Language}`)
        console.log(`Plot: ${res.data.Plot}`)
        console.log(`Actors: ${res.data.Actors  }`)

    })
    .catch( (err) => {
        console.log(`Encountered error: ${err}`)
    });
}

module.exports = searchMovie;