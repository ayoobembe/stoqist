angular.module('Stoqist.services',[])

	.factory('markitAPIservice', function($http) {
		var markitAPI = {};

		markitAPI.lookupTickers = function() {
			return $http({
				method: 'JSONP',
				url: 'http://dev.markitondemand.com/Api/v2/Lookup?apple'
			});
		}

		return markitAPI
	});