angular.module('needle', [
	'ngRoute',
	'needle.user',
	'needle.modal'
])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/app/user/index.html',
			controller: 'UserCtrl'
		});
});