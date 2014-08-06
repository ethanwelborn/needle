angular.module('needle.modal', ['btford.modal'])

.controller('ModalCtrl', ['$scope', 'btfModal', function($scope, btfModal) {
	$scope.hideModal = function hideModal() {

	};
}])

.factory('modalFactory', ['btfModal', function(btfModal) {
	return btfModal({
		controller: 'ModalCtrl',
		controllerAs: 'modal',
		templateUrl: '/js/modal/user-modal.html'
	});
}]);