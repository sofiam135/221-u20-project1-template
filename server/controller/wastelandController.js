var wasteland = require('../model/wastelandItem')

var wastelands = [];

var wasteland1 = wasteland.createwasteland("", "", "", "");
var wasteland2 = wasteland.createwasteland("", "", "", "");
var wasteland3 = wasteland.createwasteland("", "", "", "");

wastelands.push(wasteland1);
wastelands.push(wasteland2);
wastelands.push(wasteland3);


exports.getwastelands = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(wastelands);
}

exports.savewasteland = function(req, res) {
	let newwasteland = wasteland.createwasteland(req.body.firstName, req.body.lastName, req.body.email, req.body.password);
	wasteland.push(newwasteland);
	res.setHeader('Content-Type', 'application/json');
	res.send(wastelands);
}

exports.getwasteland = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.send(wastelands[req.params.wastelandId]);
}

exports.deletewasteland = function(req, res) {
	wasteland.splice(req.params.wastelandId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(wastelands);
}

exports.updatewasteland = function(req, res) {
	// get the existing user from the array
	var updatedwasteland = wasteland[req.params.wastelandId];

	// check to see what has been passed and update the local copy
	console.log(req.body.firstName);
	if(req.body.firstName)

		updatedwasteland.firstName = req.body.firstName;
	if(req.body.lastName)
		updatedwasteland.lastName = req.body.lastName;
	if(req.body.email)
		updatedwasteland.email = req.body.email;
	if(req.body.password)
		updatedwasteland.password = req.body.password;

	// save the local copy of the user back into the array
	wastelands[req.params.wastelandId] = updatedwasteland;

	res.setHeader('Content-Type', 'application/json');
	res.send(wastelands[req.params.wastelandId]);
}