angular.module('needle.modal', ['btford.modal'])

.controller('ModalCtrl', ['$scope', 'modalFactory', function($scope, modalFactory) {
	$scope.hideModal = function hideModal() {
		modalFactory.deactivate();
	};

	$scope.addUser = function addUser() {
		console.log('magoo');
	};
}])

.factory('modalFactory', ['btfModal', function(btfModal) {
	return btfModal({
		controller: 'ModalCtrl',
		controllerAs: 'modal',
		templateUrl: '/js/modal/user-modal.html'
	});
}]);