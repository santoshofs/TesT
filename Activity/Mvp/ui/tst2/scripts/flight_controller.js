SanTechApp.controller('flightsearchCtrl2', function($scope, $state, $rootScope, $filter, flightServices) {
    $scope.travellocation = ["CHENNAI", "DELHI", "MUMBAI", "KOLKATA"];
    $scope.flight_from;
    $scope.flight_to;
    $rootScope.travel_date;

    $scope.searchflight = function() {
      flightServices.checkFlight($scope.flight_from, $scope.flight_to);
    }
    $scope.sort = function(keyname) {
      $scope.sortKey = keyname; //set the sortKey to the param passed
      $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.bookFlight = function(flight) {
      $scope.date = $filter("date")($scope.travel_date, 'dd-MM-yyyy');
      alert($scope.date);
      flightServices.bookTicket(flight);
    }
  })
