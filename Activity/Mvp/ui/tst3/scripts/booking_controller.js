SanTechApp.controller('bookingCtrl', function($scope, $state, $rootScope, $filter, bookingServices) {
    $scope.submitPassengerDetail = function() {
      $scope.passengerName;
      $scope.passengerAge;
      bookingServices.submitPassengerData($scope.passengerName, $scope.passengerAge);
    }
  })
  .controller('paymentcntrl', function($scope, $state, $rootScope, $filter, bookingServices) {
    $scope.paynow = function(){
      // alert("Payment Success.!");
      $rootScope.user.name;
      $rootScope.user.email;
      $rootScope.p_name;
      $rootScope.p_age;
      $rootScope.travelDate;
      $rootScope.f_name;
      $rootScope.f_from;
      $rootScope.f_to;
      $rootScope.f_depature_time;
      $rootScope.f_arrival_time;
      $rootScope.f_price;
      bookingServices.payandBook($rootScope.user.name, $rootScope.user.email, $rootScope.p_name, $rootScope.p_age, $rootScope.travelDate, $rootScope.f_name, $rootScope.f_from, $rootScope.f_to,$rootScope.f_depature_time, $rootScope.f_arrival_time, $rootScope.f_price);
    }
  })
