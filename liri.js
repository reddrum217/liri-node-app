var k = require('./keys.js');
console.log(k);


var userResponse = process.argv[2]
console.log(userResponse);




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





var params = {screen_name: 'reddrum217', count: 20};

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
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    // Do something with 'data' 
});


//Require OMDB