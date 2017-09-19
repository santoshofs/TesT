var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata', function($scope, $http) {
  $scope.users = []; //declare an empty array
  $http.get("https://api.myjson.com/bins/62lc5").success(function(response) {
    $scope.users = response; //ajax request to fetch data into $scope.data
    $scope.sortBy = 'emp_name';
  });

  $scope.sort = function(keyname) {
    $scope.sortKey = keyname; //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  }
});
