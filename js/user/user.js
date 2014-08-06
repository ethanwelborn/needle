angular.module('needle.user', [])

.controller('UserCtrl', ['$scope', 'userService', 'modalFactory', function($scope, userService, modalFactory) {
	$scope.users = [
		{
			name: 'Guy',
			email: 'guy@place.com'
		}
	];

	$scope.showModal = function showModal() {
		modalFactory.activate;
	};

	$scope.addUser = function addUser() {
		console.log('hello');
	};
}])

.service('userService', function() {

});