SanTechApp.controller('flightsearchCtrl2', function($scope, $state, $rootScope, $filter, flightServices) {
  $scope.travellocation = ["CHENNAI", "DELHI", "MUMBAI", "KOLKATA"];
  $scope.flight_from;
  $scope.flight_to;
  $scope.today = {
         currentDate: new Date()
       };
  $rootScope.travelDate;

  $scope.searchflight = function() {
    $rootScope.travelDate = $scope.travel_date;
    flightServices.checkFlight($scope.flight_from, $scope.flight_to);
  }
  $scope.sort = function(keyname) {
    $scope.sortKey = keyname; //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  }
  $scope.bookFlight = function(flight) {
    flightServices.bookTicket(flight);
  }
})
