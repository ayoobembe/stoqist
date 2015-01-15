angular.module('Stoqist',[
'Stoqist.controllers',
'Stoqist.services'
])
.config(function($httpProvider) {
	delete $httpProvider.defaults.headers.common['X-Requested-With']; 
	// $httpProvider.defaults.headers.get['DNT'] = '1';
});
