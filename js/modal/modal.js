angular.module('needle.modal', ['btford.modal'])

.controller('ModalCtrl', ['$scope', 'userService', 'modalFactory', function($scope, userService, modalFactory) {
	$scope.user = {};

	$scope.hideModal = function hideModal() {
		modalFactory.deactivate();
	};

	$scope.addUser = function addUser() {
		userService.storeUser($scope.user);
	};
}])

.factory('modalFactory', ['btfModal', function(btfModal) {
	return btfModal({
		controller: 'ModalCtrl',
		controllerAs: 'modal',
		templateUrl: '/js/modal/user-modal.html'
	});
}]);
