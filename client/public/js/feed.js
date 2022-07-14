document.getElementById("portal_button").addEventListener("click", ()=> goToLocation("https://www.youtube.com/watch?v=ANRzUDXB9XI"));

function feedItem(title,body,linkURL, imageURL) {
    this.title = title;
    this.body = body;
    this.linkURL = linkURL;
    this.imageURL = imageURL;
}
let story1 = new feedItem("Sonder", "Brent Faiyez has released and still releases music under Sonder", "https://www.latimes.com/entertainment/music/la-et-ms-brent-faiyaz-sonder-son-profile-20180404-story.html", "https://img.youtube.com/vi/ox1NsRJ5aUA/0.jpg");
let story2 = new feedItem("Lost kids","Merch", "https://www.lostkidsforever.com/store", "https://bit.ly/3NOffYD");
let story3 = new feedItem("Wasteland", "Upcoming Album", "https://www.brentfaiyaz.com/", "https://bit.ly/3P9TF1V");

let currentStories = [story1, story2, story3];

let displayItem = function(feedview) {
    document.getElementById("newsfeed").innerHTML +=
    "<div><h2>" + feedview.title + "</h2> <img class = feedImage src = " + feedview.imageURL + "></img> <br/ ><p>" + feedview.body + "<p><a href = " + feedview.linkURL + ">Click here to find our more!</a><hr/></div>";
}

window.addEventListener("load", ()=> {
    for(var i = 0; i < currentStories.length; i++) {
        displayItem(currentStories[i]);
    }
});