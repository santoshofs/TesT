SanTechApp.controller('bookingCtrl', function($scope, $state, $rootScope, $filter, bookingServices) {
  $scope.submitPassengerDetail = function() {
    $scope.p_name;
    $scope.p_age;
    bookingServices.submitPassengerData($scope.p_name, $scope.p_age);
  }
})
