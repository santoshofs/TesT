SanTechApp.controller('bookingCtrl', function($scope, $state, $rootScope, $filter, bookingServices) {
  $scope.submitPassengerDetail = function() {
    $scope.passengerName;
    $scope.passengerage;
    $rootScope.user.name;
    $rootScope.user.email;
    bookingServices.submitPassengerData($scope.passengerName, $scope.passengerage);
  }
})
