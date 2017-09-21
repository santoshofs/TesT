var aapp = angular.module('myApp2', []);
        aapp.controller("employeeController", ['$scope','ServiceEmpEdit','ServiceEmpDelete',function ($scope,ServiceEmpEdit,ServiceEmpDelete) {
           $scope.empdetails=[
		   {
			   "age":21,
			   "name":"Alosiyus",
			   "place":"tamilnad"
		   },
            {
			   "age":36,
			   "name":"dhoni",
			   "place":"Ranchi"
		   },
		     {
			   "age":42,
			   "name":"Sachin",
			   "place":"Bombay"
		   }

		    ],

            $scope.employeeEdit = function(){
				ServiceEmpEdit.edita1();
			}
			
			$scope.employeeDelete=function(){
			ServiceEmpDelete.deletea1();
			}			
        }]);
		aapp.service('ServiceEmpEdit', function () {
   
				this.edita1 = function(){
					console.log("hi");
				}
   
   });
				aapp.service('ServiceEmpDelete', function () {
   
				this.deletea1 = function(){
					alert("Delete this row");
				}
   
   });