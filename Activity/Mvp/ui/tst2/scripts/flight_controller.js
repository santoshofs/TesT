SanTechApp.controller('flightsearchCtrl2', function($scope, $state, $rootScope, flightServices) {
    $scope.travellocation = ["CHENNAI", "DELHI", "MUMBAI", "KOLKATA"];
    $scope.flight_from;
    $scope.flight_to;

    $scope.searchflight = function() {
      flightServices.checkFlight($scope.flight_from, $scope.flight_to);
    }
    $scope.sort = function(keyname) {
      $scope.sortKey = keyname; //set the sortKey to the param passed
      $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
  })
