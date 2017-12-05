;(function() {

    angular
    .module('todo')
    .config(config);

	config.$inject = ['$stateProvider', '$urlRouterProvider'];

	function config($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/app.html',
			controller: 'TodoController',
			controllerAs: 'home',
			isAuthentificaded: true
		});

	};
    
})();