angular.module('needle.user', [])

.controller('UserCtrl', ['$scope', 'userService', 'modalFactory', function($scope, userService, modalFactory) {
	$scope.users = [
		{
			name: 'Guy',
			email: 'guy@place.com'
		}
	];

	$scope.showModal = function showModal() {
		modalFactory.activate();
	};

}])

.service('userService', function() {

});