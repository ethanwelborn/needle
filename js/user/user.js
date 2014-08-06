angular.module('needle.user', [])

.controller('UserCtrl', ['$scope', 'userService', 'modalFactory', function($scope, userService, modalFactory) {
	$scope.users = [];

	// Callback for user service observer
	var getUsers = function getUsers() {
		$scope.users = userService.getUsers();
	};

	// Register self as observer on user service
	userService.registerObserver(getUsers);

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
		users.push(user);
		notifyObservers();
	};

	this.getUsers = function getUsers() {
		return users;
	};
});