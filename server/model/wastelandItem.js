function wasteland(song, artist, album, ranking) {
	this.song = song;
	this.artist = artist;
	this.album = album;
	this.ranking = ranking;
}

exports.createwasteland = function(song, artist, album, ranking) {
  return new wasteland(song, artist, album, ranking);
};

console.log("model running");