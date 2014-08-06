angular.module('needle.user', [])

.controller('UserCtrl', ['$scope', 'modalFactory', function($scope, modalFactory) {
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
	this.users = [];

	this.storeUser = function storeUser(user) {
		this.users.push(user);
	};

	this.getUsers = function getUsers() {
		return this.users;
	};
});