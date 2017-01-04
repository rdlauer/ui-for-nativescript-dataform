var Observable = require("data/observable").Observable;

var page;
var album = new Observable();
var pageData = new Observable();

exports.pageLoaded = function(args) {
	page = args.object;
	page.bindingContext = pageData;

	album = {
		bandName: "Arcade Fire",
		albumName: "Funeral",
		year: 2004,
		owned: true,
		myRating: 9.5
	};

	pageData.set("album", album);
};