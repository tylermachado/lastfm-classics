var request	=	require("request"),
	fs = 		require('fs'),
	moment =	require('moment'),
	dotenv =	require('dotenv').config(),
	express=	require('express'),
	app =		express(),
	Slack = require('slack-node');

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
			 
slack = new Slack();
slack.setWebhook(process.env.SLACK_WEBHOOK);

request(url, function (error, response, body) {
	if (!error) {
    
	    var list = JSON.parse(body);
	    
	    list = list.weeklyalbumchart.album;
	    
	    var array = [];
	    
	    for (var i=0; i<10; i++) {
	    	var obj = new Object();
	    	obj.text = (i+1) + ". " + list[i].artist["#text"] + ", " + list[i].name;
	      	array.push(obj);
	    }

	    slack.webhook({
	      channel: "#general",
	      username: "Last.fm Classics",
	      icon_emoji: ":musical_note:",
	      text: "Here's what you listened to this week 10 years ago:",
	      attachments: array
	    }, function(err, response) {
	      console.log(response);
	    });
	    
		app.get('/', function (req, res) {
	      res.send(array);
	    });
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});



	
