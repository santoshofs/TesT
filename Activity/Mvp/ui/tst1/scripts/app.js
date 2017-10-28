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
    .state("user", {
      url: "/user",
      templateUrl: 'views/userpage.html'
    })
    .state("flight", {
      url: "/flight",
      templateUrl: 'views/flightportal.html'
    })
    .state("about", {
      url: "/about",
      templateUrl: 'views/about.html'
    });
}).run(function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});

// SanTechApp.controller("RootController", function($scope,$http) {
//   $scope.loginfunction = function (){
//     alert("asdf");
//   }
// });
