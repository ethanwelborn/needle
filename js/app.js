angular.module('needle', [
	'ngRoute',
	'needle.user'
])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'user/index.html',
			controller: 'UserCtrl'
		});
});