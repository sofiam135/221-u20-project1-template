const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})


//-------------------------------------------------------------------------feed----

var feedItems = require('./controller/feedController');

app.route('/api/feedItems')
    .get(feedItems.getfeedItems)
    .post(feedItems.savefeedItem)
    
app.route('/api/feedItems/:feedItemId')
    .get(feedItems.getfeedItem)
    .patch(feedItems.updatefeedItem)
    .delete(feedItems.deletefeedItem)


//-----------------------------------------------------------------------------

var wastelands = require('./controller/wastelandController');

app.route('/api/wastelands')
    .get(wastelands.getwastelands)
    .post(wastelands.savewasteland);
    
app.route('/api/wastelands/:wastelandId')
    .get(wastelands.getwasteland)
    .patch(wastelands.updatewasteland)
    .delete(wastelands.deletewasteland)

app.listen(1337, function () {
    console.log('Example app listening on port 1337!');
})


