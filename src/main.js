Banner = require("./banner");
Ads = require("./ads");

window.ChanneldirAds = function(app) {

	var ads = new Ads(app);

	function add(format, renderFunction) {
		return new Banner(app, format, renderFunction);
	}

	function click(id) {
		ads.incClicks(id);
	}

	return {
		add: add,
		click: click
	}
};
