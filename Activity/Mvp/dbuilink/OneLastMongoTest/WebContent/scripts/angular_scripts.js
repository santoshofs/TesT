SanTechApp.controller('signinCtrl',function($scope,$state,$rootScope,customServices){
			$scope.email;
			$scope.pwd;
			$scope.login = function(){
				customServices.checkLogin($scope.email, $scope.pwd);
			}
		})
