console.log("Channeldir Ads");
Ads = require("./ads");

ads = new Ads("channeldir");

ads.get("350x350")
.then(function(banner){
	console.log(banner);
})
.catch(function(error){
	console.error(error);
});

ads.incClicks(2)
.then(function(res){
	console.log(res);
})
.catch(function(error){
	console.error(error);
});
