//angularjs Part
var SanTechApp = angular.module('SanTechApp', ["ui.router"]);

// ui routing
SanTechApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  .state("/", {
    url: "/home",
    templateUrl: 'views/home.html'
  })
    // HOME STATES AND NESTED VIEWS ========================================
    .state("home", {
      url: "/home",
      templateUrl: 'views/home.html'
    })

    .state("flight", {
      url: "/flight",
      templateUrl: 'views/flight.html'
    });
});

SanTechApp.controller("RootController", function($scope,$http) {
  $scope.loginfunction = function (){
    alert("asdf");
  }
});
