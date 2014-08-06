angular.module('needle', [
	'ngRoute',
	'needle.user',
	'needle.modal'
])

.config(function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/js/user/index.html',
			controller: 'UserCtrl'
		});
});