angular.module('needle.user', [])

.controller('UserCtrl', ['$scope', 'userService', function($scope, userService) {
	$scope.users = [
		{
			name: 'Guy',
			email: 'guy@place.com'
		}
	];

	$scope.addUser = function addUser() {
		console.log('hello');
	};
}])

.service('userService', function() {

});