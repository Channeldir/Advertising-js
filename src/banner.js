var Ads = require("./ads");

module.exports = function(app, format) {
	
	var banner = {
		id: null,
		image: null,
		url: null,
		displayTime: null
	};

	var ads = new Ads(app);

	function fetch() {
		ads.get(format)
			.then(function(resBanner){
				banner.id = resBanner.id;
				banner.image = resBanner.image;
				banner.url = resBanner.url || null;
				banner.displayTime = resBanner.display_time || null;
				console.log(banner);
				checkRefresh(banner.displayTime);
			})
			.catch(function(error){
				console.error(error);
			});
	}

	function checkRefresh(displayTime) {
		var seconds = parseInt(displayTime);
		if (Number.isInteger(seconds)) {
			console.log("refresh banner in", displayTime, "seconds");
			setTimeout(fetch, displayTime * 1000);
		}
	}

	fetch();
	
	return banner;
};