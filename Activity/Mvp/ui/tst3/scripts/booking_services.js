SanTechApp.service('bookingServices', function($rootScope, $state, $http) {
  this.submitPassengerData = function(p_name,p_age) {
    alert(p_age);
    $state.go('paymentportal');

  }
})
