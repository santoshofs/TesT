var app = angular.module('angularTable', []);
// 'angularUtils.directives.dirPagination'

app.controller('listdata', function($scope, $http) {
  $scope.flights = []; //declare an empty array
  $http.get("http://localhost:8080/FinalMongoAttempt/SanService/control/getAllFlights").then(function(response) {
    $scope.flights = response.data.flights; //ajax request to fetch data into $scope.data
  });
  // app.controller('listdata', function($scope, $http) {
  //     $http.get("https://api.myjson.com/bins/12704r https://api.myjson.com/bins/1gji9n")

  //     .then(function (response) {$scope.flights = response.data.flights;});
  // });
  $scope.sort = function(keyname) {
    $scope.sortKey = keyname; //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  }
});
