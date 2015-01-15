angular.module('Stoqist.controllers',[])


	.controller('searchController', function($scope, markitAPIservice) {
		$scope.stockName = null;
		$scope.matchingStocks = null;

		$scope.setStock = function(){
			$scope.matchingStocks = $scope.stockName;
			markitAPIservice.lookupTickers($scope.matchingStocks)
				.success(function(response){
					console.log(response);
			}
		)};

	});