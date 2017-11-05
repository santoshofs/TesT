//angularjs Part
var SanTechApp = angular.module('SanTechApp', ["ui.router"]);

// ui routing
SanTechApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/santech/home');

  $stateProvider
    .state("santech", {
      url: "/santech",
      templateUrl: 'views/santech.html'
    })
    .state("santech.home", {
      url: "/home",
      templateUrl: 'views/home.html'
    })
    .state("santech.flights", {
      url: "/flights",
      templateUrl: 'views/flights.html'
    })
    .state("santech.flights.list", {
      url: "/list",
      templateUrl: 'views/flightlist.html'
    })
    .state("booking", {
      url: "/booking",
      templateUrl: 'views/booking.html'
    })
    .state("paymentportal", {
      url: "/paymentportal",
      templateUrl: 'views/paymentportal.html'
    })
    .state("santech.hotels", {
      url: "/hotels",
      templateUrl: 'views/hotels.html'
    })
    .state("santech.user", {
      url: "/user",
      templateUrl: 'views/userpage.html'
    })
    .state("santech.user.bookinghistory", {
      url: "/bookinghistory",
      templateUrl: 'views/bookinghistory.html'
    })
    .state("santech.about", {
      url: "/about",
      templateUrl: 'views/about.html'
    });
}).run(function($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
});
SanTechApp.filter('customDate', ['$filter', function($filter) {
  return function(input, limit) {
    if (!input) return;
    if (input.length <= limit) {
      return input;
    }
    return $filter('limitTo')(input, limit) + '';
  };
}]);
