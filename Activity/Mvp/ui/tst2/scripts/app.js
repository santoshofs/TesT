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
    .state("flights", {
      url: "/flights",
      templateUrl: 'views/flights.html'
    })
    .state("flights.list", {
      url: "/list",
      templateUrl: 'views/flightlist.html'
    })
    .state("booking", {
      url: "/booking",
      templateUrl: 'views/booking.html'
    })
    .state("hotels", {
      url: "/hotels",
      templateUrl: 'views/hotels.html'
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
