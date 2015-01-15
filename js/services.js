angular.module('Stoqist.services',[])

	.factory('markitAPIservice', function($http) {
		var markitAPI = {};

		markitAPI.lookupTickers = function(stock) {
			return $http({
				method: 'JSON',
				url: "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+stock+"%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json"
			})
			.success(function(d){ console.log('success'); })
			.error(function(d){ console.log(d); });


		}

		return markitAPI
	});





	// angular.module('Stoqist.services', []).factory('markitAPIservice', function($http){
	//  return{
	//  			// var markitAPI = {}

	//  			lookupTickers: function(){
	//  				$http.get('http://dev.markitondemand.com/Api/v2/Lookup/json?input=NFLX')
	//  				.success(function(response){
	//  					console.log(response)
	//  				})

	//  			}



	//  }
	// });