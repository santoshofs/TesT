var eapp = angular.module('myApp1', []);
eapp.controller('companyController', ['$scope','$state', function($scope,$state){
 $scope.details=[
		   {
			   "id":1,
			   "name":"Alosiyus",
			   "city":"chennai"
		   },	
            {
			   "id":2,
			   "name":"dhoni",
			   "city":"Jharkand"
		   },
		     {
			   "id":3,
			   "name":"Sachin",
			   "city":"Mumbai"
		   },
		   {
			   "id":4,
			   "name":"ashwin",
			   "city":"chennai"
		   }

		    ];
			 $scope.editingData = {};
			 
			  for (var i = 0, length = $scope.details.length; i < length; i++) {
      $scope.editingData[$scope.details[i].id] = false;
    }


    $scope.modify = function(detail){
        $scope.editingData[detail.id] = true;
    };


    $scope.update = function(detail){
        $scope.editingData[detail.id] = false;
    };

	
	
	$scope.delete_table = function (detail) {
				// alert("do you want to delete this row");
                var index = $scope.details.indexOf(detail);
				if(window.confirm("Are you sure you want to delete this row!!")){
                $scope.details.splice(index, 1);
				}
            };
			
			
			 $scope.addRow = function () {
           /*  if ($scope.name != undefined && $scope.city != undefined) {
                var movie = [];
                movie.name = $scope.name;
                movie.city = $scope.city;

                $scope.details.push(movie);

                // CLEAR TEXTBOX.
                $scope.name = null;
                $scope.city = null; */
				$state.go("company.newrow");
            
        };
			  
}]);