angular.module('Stoqist.controllers',[])

	.controller('searchController', function($scope) {
		$scope.stockName = null;
		$scope.declareIt = null;

		$scope.sayHello = function(){
			$scope.declareIt = 'Hello, World!';
		};


	});