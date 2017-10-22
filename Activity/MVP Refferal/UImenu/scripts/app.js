$(function() {
  $("#hometag").addClass("active");
  $("#brandhear").on("click", function() {
    $(".nav li").removeClass("active");
    $("#hometag").addClass("active");
  });
  $(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });
});

var SanTechApp = angular.module('SanTechApp', ["ui.router"]);

SanTechApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state("home", {
            url: "/home",
            templateUrl: 'views/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit
        })
        .state("user", {
            url: "/user",
            templateUrl: 'views/usercheckin.html'
        });

});
