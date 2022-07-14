function feedItem(first, last, email, password) {
	this.firstName = first;
	this.lastName = last;
	this.email = email;
	this.password = password;
}

exports.createfeedItem = function(first, last, email, password) {
    return new feedItem(first, last, email, password);
};