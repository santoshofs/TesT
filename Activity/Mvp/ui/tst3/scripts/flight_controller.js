SanTechApp.controller('flightsearchCtrl2', function($scope, $state, $rootScope, $filter, flightServices) {
    $scope.travellocation = ["CHENNAI", "DELHI", "MUMBAI", "KOLKATA"];
    $scope.flight_from;
    $scope.flight_to;
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
    //   $scope.date = $filter("date")($scope.travel_date, 'dd-MM-yyyy');
    // alert($scope.date);
    //$rootScope.travel_date;
      // var tdate=$scope.travel_date;
      // $scope.date = $filter("date")($scope.travel_date, 'dd-MM-yyyy');
      // alert(tdate);
      // var travel_date=document.getElementById('travel_date').value;
      // alert(travel_date);
      flightServices.bookTicket(flight);
    }
  })
