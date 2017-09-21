
var zapp=angular.module('myApp1');
zapp.controller("addrowcontroller",['$scope','$state',function($scope,$state){
    $scope.addRecord=function(){
	
	if ($scope.name != undefined && $scope.city != undefined) {
                var movie = [];
                movie.name = $scope.name;
                movie.city = $scope.city;

                $scope.details.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.city = null;
	}
	
	};
	$scope.cancel=function(){
		
		$state.go("company");
		
		
	};

}]);
