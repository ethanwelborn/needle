angular.module('needle.modal', ['btford.modal'])

.controller('ModalCtrl', ['$scope', 'userService', 'modalFactory', function($scope, userService, modalFactory) {
	$scope.user = {};
	$scope.form = {};

	$scope.hideModal = function hideModal() {
		modalFactory.deactivate();
	};

	$scope.addUser = function addUser() {
		userService.storeUser($scope.user);
		$scope.user = {}; // Reset the user to empty
	};

	$scope.submitForm = function submitForm(isValid) {
		$scope.form.submitted = true;
		if(isValid) {
			$scope.addUser();
			$scope.form.submitted = false;
		}
	};

}])

.factory('modalFactory', ['btfModal', function(btfModal) {
	return btfModal({
		controller: 'ModalCtrl',
		controllerAs: 'modal',
		templateUrl: '/app/modal/user-modal.html'
	});
}]);
