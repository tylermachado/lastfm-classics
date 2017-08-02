var request	=	require("request"),
	fs = 		require('fs'),
	moment =	require('moment'),
	nodemailer = require("nodemailer");

var user = "jellybones07",
	apiKey = "48ab59da2b9f581860ae9e0f88ce1af3",
	yearsBack = 10;

var now = Date.now();
var pastFrom = moment().subtract(yearsBack, "years").unix();
var pastTo 	 = moment().subtract(yearsBack, "years").add(7, "days").unix();

var url = "http://ws.audioscrobbler.com/2.0/?method=user.getweeklyalbumchart" + 
			"&user=" + user + 
			"&from=" + pastFrom + 
			"&to=" + pastTo + 
			"&api_key=" + apiKey + 
			"&format=json";

request(url, function (error, response, body) {
	if (!error) {
		console.log(body);
	} else {
		console.log("We’ve encountered an error: " + error);
	}
	
});



	
