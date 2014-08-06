angular.module('needle.modal', ['btford.modal'])

.factory('modalFactory', function(btfModal) {
	return btfModal({
		controller: 'ModalCtrl',
		controllerAs: 'modal',
		templateUrl: '/js/modal/user-modal.html'
	});
});