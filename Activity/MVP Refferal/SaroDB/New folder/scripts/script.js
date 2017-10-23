var app = angular.module('myApp', []);
		app.controller('formCtrl', function($scope,$http) {
			$scope.Response = false;
			$scope.ResponseDiv = true;
			$scope.login =true;
			
			$scope.login = function(username,pwd){

			var url = "http://localhost:8080/LinkedInApp/service/user/login?email="+username+"&password="+pwd;
			console.log("url",url)
			$http({
			method: 'POST',
			url: url
				}).then(function successCallback(response) {
				if(response.data=='Success'){
				window.location="home.html";
				
				} else {
				$scope.Status = 'Invalid user';
				}
				console.log(response);
				}, function errorCallback(response) {
				$scope.Status = 'Invalid user';
				});
			}
		
			
			$scope.addUser = function(username,email,pwd){

			var url = "http://localhost:8080/LinkedInApp/service/user/addUser?name="+username+"&email="+email+"&password="+pwd;
			console.log("url",url)
			$http({
			method: 'GET',
			url: url
				}).then(function successCallback(response) {
				if(response.data.Status =='Success'){
				
				$scope.Status = 'Successfully logged in';
				$scope.nameofUser = response.data.name;
				window.location="home.html";
				
				} else {
				$scope.Status = 'Invalid user';
				}
				console.log(response);
				}, function errorCallback(response) {
				$scope.Status = 'Invalid user';
				});
			}
		});
		
		$(document).ready(function() {
			$('#getFormData').hide();
		});

		function create() {
			$('#login').hide();
			$('#getFormData').show();
		};