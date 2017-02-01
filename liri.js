var k = require('./keys.js');
// console.log(k);


var userResponse = process.argv[2];
var userResponse2 = process.argv[3];

// console.log(userResponse);




// var g = require("geocoder");

// // Take in the command line arguments
// var city = process.argv[2];
// var state = process.argv[3];

// // Build the address by combining the city and state
// var address = city + ", " + state;

// // Then use the Geocoder npm package to geocode the address
// g.geocode(address, function(error, info) {
//     if (error){
//         console.log(error);
//         return;
//     }

//   // Then console log the result and stringify it.
//   // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
//   // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
//   console.log(JSON.stringify(info, null, 2));
// });


// First require Twitter
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'xMaYs1wjzYdHuvyqlGMmFW4wW',
  consumer_secret: 'eaIQYXnHNL10wyxvAP1yFL9UPzrRAFsN7XZa8jwzApm8sCHqks',
  access_token_key: '824124236382044160-go0oGyOONWxXXWy89qu78rovxkDwMVi',
  access_token_secret: 'nrraqR5cyawiA2Fb4IGeID8zOpBizjm69oSoLvDwtbbb2',
});





var params = {screen_name: 'peascarrotsband', count: 20};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    if (userResponse == 'my-tweets') {
    	for(var i = 0; i < tweets.length; i++)
		console.log(tweets[i].text);
		};
  	}
});


// Require Spotify API
var spotify = require('spotify');

//Still need to take in multiple words for song response
var song = String(userResponse2);

 
spotify.search({ type: 'track', query: song }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
      }
 	  if (userResponse == 'spotify-this-song') {
    	 
      //console log artist
    	 console.log('Artist: ' + data.tracks.items[0].album.artists[0].name);
		//song's name
		    console.log('Song: ' + data.tracks.items[0].name);
    	//preview link of song from spotify
    	 console.log('Preview: ' + data.tracks.items[0].preview_url);
    	//the album
    	 console.log('Album: ' + data.tracks.items[0].album.name);
		};

    //Add in Ace of Base as a default
  	
});


//Require OMDB

var request = require('request');



var movie = "";
// var queryUrl = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json';

for (i = 3; i < process.argv.length; i++){
    // console.log(process.argv[3]);
    if (i == 3) movie = movie + process.argv[i];
    else movie = movie + "+" + process.argv[i];
    // console.log(movie);
};
console.log(queryUrl);
var queryUrl = 'http://www.omdbapi.com/?t=' + movie + '&y=&plot=short&r=json';

request(queryUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage. 
  }
  if (userResponse2 == 'movie-this'){
    
      //Title of the movie.
      console.log('Title: ' + (JSON.parse(body).Title));
      //Year the movie came out.
      //IMDB Rating of the movie.
//Country where the movie was produced.
//Language of the movie.
//Plot of the movie.
//Actors in the movie.
//Rotten Tomatoes Rating.
//Rotten Tomatoes URL.


  }
})