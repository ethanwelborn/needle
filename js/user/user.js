angular.module('needle.user', [])

.controller('UserCtrl', ['$scope', 'userService', function($scope, userService) {
	$scope.users = [
		{
			name: 'Guy',
			email: 'guy@place.com'
		}
	];
}])

.service('userService', function() {

});