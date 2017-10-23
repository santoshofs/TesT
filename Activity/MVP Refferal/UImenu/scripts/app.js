//angularjs Part
var SanTechApp = angular.module('SanTechApp', ["ui.router"]);

// ui routing
SanTechApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
    .state("home", {
      url: "/home",
      templateUrl: 'views/home.html'
    })

    .state("about", {
      url: "/about",
      templateUrl: 'views/about.html'
    });
});

SanTechApp.controller("RootController", function($scope) {
  // function loginfunction() {
  //   console.log("login form submitted..!");
  //   alert("LoginTest");
  // };
  $scope.test = function (){
    alert("asdf");
  }
});
