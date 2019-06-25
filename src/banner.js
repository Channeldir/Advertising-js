var Ads = require("./ads");

module.exports = function(app, format, renderFunction) {
	
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
				banner.displayTime = parseInt(resBanner.display_time) || null;
				render();
				refresh();
			})
			.catch(function(error){
				console.error(error);
			});
	}

	function refresh() {
		if (Number.isInteger(banner.displayTime)) {
			console.log("refresh banner in", banner.displayTime, "seconds");
			setTimeout(fetch, banner.displayTime * 1000);
		}
	}

	function render() {
		if (typeof renderFunction == "function") {
			renderFunction(banner);
		}
	}

	fetch();
	
	return banner;
};