var axios = require('axios');

module.exports = function(app){

	var apiEndpoint = "https://127.0.0.1:8000/ads";

	function get(format) {
		return new Promise(function(resolve, reject){
			axios.get(apiEndpoint + "/" + app + "/" + format)
				.then(function(response){
					if (response.status == 200) {
						resolve(response.data);
					} else {
						reject(response.status);
					}
				})
				.catch(function(error){
					reject(error);
				});
		});
	}

	function incClicks(id) {
		return new Promise(function(resolve, reject){
			axios.post(apiEndpoint + "/" + app + "/click/" + id )
				.then(function(response){
					if (response.status == 201) {
						resolve();
					} else {
						reject(response.status);
					}
				})
				.catch(function(error){
					reject(error);
				});
		});
	}

	return {
		get: get,
		incClicks: incClicks
	};
};