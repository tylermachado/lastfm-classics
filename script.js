var request	=	require("request"),
	fs = 		require('fs'),
	moment =	require('moment'),
	nodemailer = require("nodemailer"),
	dotenv =	require('dotenv').config();

var user = process.env.USERNAME,
	apiKey = process.env.APIKEY,
	yearsBack = process.env.YEARSBACK;

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



	
