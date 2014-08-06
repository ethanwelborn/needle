angular.module('needle.user', [])

.controller('UserCtrl', ['$scope', 'modalFactory', function($scope, modalFactory) {
	$scope.users = [];

	$scope.showModal = function showModal() {
		modalFactory.activate();
	};

}])

.service('userService', function() {
	var users = [];
	var observerCallbacks = [];

	var notifyObservers = function notifyObservers() {
		angular.forEach(observerCallbacks, function(callback) {
			callback();
		});
	};

	this.registerObserver = function registerObserver(callback) {
		observerCallbacks.push(callback);
	};

	this.storeUser = function storeUser(user) {
		this.users.push(user);
	};

	this.getUsers = function getUsers() {
		return this.users;
	};
});