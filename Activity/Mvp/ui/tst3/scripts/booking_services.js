SanTechApp.service('bookingServices', function($rootScope, $state, $http) {
  this.submitPassengerData = function(passengerName,passengerage) {
    alert(passengerName);
    $rootScope.p_name=passengerName;
    $rootScope.p_age=passengerage;
    $state.go('paymentportal');

  }
})
