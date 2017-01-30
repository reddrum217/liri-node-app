var fs = require('fs');
var request = require('request')
var response = process.argv[2];
var movie = process.argv[3]
var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&tomatoes=true&r=json";
var noBody = "http://www.omdbapi.com/?t=" + "Mr Nobody" + "&y=&plot=short&tomatoes=true&r=json";
var options = { screen_name: "SteveGissubel", count: 3 };
var song = process.argv[3]

if (response == 'my-tweets'){
	var keys = require('./keys.js')
	var Twitter = require('twitter')


	// console.log('stuff')
} if (response == 'spotify-this-song'){
	var spotify = require('spotify');
	 
	spotify.search({ type: 'track', query: song }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
    var songInfo = data.tracks.items[0];
   		console.log("Artist: " + songInfo.artists[0].name)
        console.log("Song Title: " + songInfo.name)
        console.log("Album: " + songInfo.album.name)
        console.log("Song Preview: " + songInfo.preview_url)
	});
		if (process.argv[3] === undefined) {
		spotify.search({type: 'track', query: 'the sign'}, function(err, data) {
			// console.log(JSON.stringify(data));    
			console.log(JSON.stringify(data.tracks.items[6].name));    

			console.log(JSON.stringify(data.tracks.items[4].name));    
    // var songInfo = data.artists.items[0];

        // console.log(songInfo.name)
        // console.log(songInfo.album.name)
        // console.log(songInfo.preview_url)
	});
		}

} if (response == 'movie-this'){
	request(queryUrl, function(error,response,body){
	console.log("Movie title: " + JSON.parse(body).Title)
	console.log("Year: " + JSON.parse(body).Year)
	console.log("IMDB Rating: " + JSON.parse(body).imdbRating) 
	console.log("Country Made in: " + JSON.parse(body).Country)
	console.log("Language: " + JSON.parse(body).Language)
	console.log("Plot: " + JSON.parse(body).Plot) 
	console.log("Starring: " + JSON.parse(body).Actors)
	console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating)
	console.log("URL to Rotten Tomatoes" + JSON.parse(body).tomatoURL);
});
	if(process.argv[3] === undefined){
			request(noBody, function(error,response,body){
			console.log(JSON.parse(body).Title)
			console.log(JSON.parse(body).Year, JSON.parse(body).imdbRating, JSON.parse(body).Country, JSON.parse(body).Language, JSON.parse(body).Plot, JSON.parse(body).Actors, JSON.parse(body).tomatoRating, JSON.parse(body).tomatoURL)
			});
	}


} if (response == 'do-what-it-says'){
	console.log('stuff')

} 



// var client = new Twitter(twitterKeys);
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'yO5gYfCAfDWwQelBn4TrpNrcU',
  consumer_secret: 'MsuR44ZiztZ0Pc5SFtY6e92d72OYDCqTGMrXdo3MfQPL2jaJEU',
  access_token_key: '823332587271847936-R1izpIIMQ9TA4JR3Dnj4W8JZprjXACu',
  access_token_secret: 'PJPltRG2szqmrAOiTQcG0256AWWoqcv19sVnZUM8rPZuq',
});


var params = {screen_name: 'SteveGissubel', count: 20};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  for (var i = tweets.length - 1; i >= 0; i--) {
  	console.log(tweets[i].created_at, tweets[i].text);
  }
  if (!error) {
  }
});

// 	Twitter('statuses/user_timeline', options , function(err, data) {
// 	for (var i = 0; i < data.length ; i++) {
//     console.log(data[i].text);
//   }
// })








