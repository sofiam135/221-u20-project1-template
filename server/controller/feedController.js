var feedItem = require('../model/feedItem');

var feedItems = [];

var story1 = feedItem.createfeedItem("this", "is", "a", "joke");
var story2 = feedItem.createfeedItem("live", "laugh", "love", "life");
var story3 = feedItem.createfeedItem("ralphie", "is", "my", "bigbro0");

feedItems.push(story1);
feedItems.push(story2);
feedItems.push(story3);


exports.getfeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.savefeedItem = function(req, res) {
	let newfeedItem = feedItem.createfeedItem(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	feedItems.push(newfeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.getfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(feedItems[req.params.feedItemId]);
}

exports.deletefeedItem = function(req, res) {
	feedItems.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(feedItems);
}

exports.updatefeedItem = function(req, res) {
	// get the existing feedItem from the array
	var updatedfeedItem = feedItems[req.params.feedItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedfeedItem.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedfeedItem.lastName = req.body.lastName;
	if(req.body.email)
		updatedfeedItem.email = req.body.email;
	if(req.body.password)
		updatedfeedItem.password = req.body.password;

	// save the local copy of the feedItem back into the array
	feedItems[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(feedItem[req.params.feedItemId]);
}