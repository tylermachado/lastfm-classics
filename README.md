# Last.fm Classics

A bot that reminds you of what you were listening to some years ago. Not affiliated with Last.fm, but built using their API (thanks Last.fm!).

## What's the point

I like to think of myself as a ~~music nerd~~ but I often find myself in deep musical ruts; I have a bench of classics I always return to, plus a substantial list of new-ish things I listen to a bunch for a while before moving on and mostly forgetting about them. I wanted to get snapshots of what I was listening to on this week or day 10 years ago (puts on obnoxious hipster denim jacket), to get myself out of those ruts and rediscover old favorites. Or just cringe at what I used to listen to.

## What you need

The data comes from Last.fm. You need an API key and a Last.fm username, ideally one you've been using for a long time so you have lots of data! There's also an environment variable called YEARSBACK, though, so if you haven't been on for 10 years like I have (adjusts obnoxious hipster denim jacket) then you can set it to 5 or 1 or whatever else to get a more recent snapshot.

You also need a Slack account. Setup incoming webhooks through Slack, and copy the URL into the .env file. I have this set up going to the #general channel on my personal Slack that nobody else is on, but if you want to set this up on your work Slack or any other team where you've got webhook permissions, I guess you can do that, though I can't recommend that without knowing how much your office tolerates you as the resident music snob. (A thing I would like to do in the future is add more services to this app, so instead of getting a Slack message, you could get a Facebook Messenger alert or an email or something.)

Lastly, this is set up to run on Heroku, so you'll need to set that up too and upload the code there. Though my prototype ran on Glitch, and really this is just a basic Node thing so it can run anywhere that's Node friendly.