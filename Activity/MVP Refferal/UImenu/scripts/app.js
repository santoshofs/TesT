// navigation bar active class adder
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

// user checkin credentials
$(document).ready(function(){
    $("#accountcheckin").click(function(){
        $("#usercheckinModal").modal();
        $("#login-inner-nav").addClass("active");
        $("#register-inner-nav").removeClass("active");
        $("#registerForm").removeClass("active");
        $("#LoginForm").addClass("active");
    });
    $("#logintab").click(function(){
        $("#usercheckinModal").modal();
        $("#login-inner-nav").addClass("active");
        $("#register-inner-nav").removeClass("active");
        $("#registerForm").removeClass("active");
        $("#LoginForm").addClass("active");
    });
    $("#login-inner-nav").click(function(){
        $("#usercheckinModal").modal();
        $("#login-inner-nav").addClass("active");
        $("#register-inner-nav").removeClass("active");
        $("#registerForm").removeClass("active");
        $("#LoginForm").addClass("active");
    });
    $("#registertab").click(function(){
        $("#usercheckinModal").modal();
        $("#register-inner-nav").addClass("active");
        $("#login-inner-nav").removeClass("active");
        $("#LoginForm").removeClass("active");
        $("#registerForm").addClass("active");
    });
    $("#register-inner-nav").click(function(){
        $("#usercheckinModal").modal();
        $("#register-inner-nav").addClass("active");
        $("#login-inner-nav").removeClass("active");
        $("#LoginForm").removeClass("active");
        $("#registerForm").addClass("active");
    });

});

// ui routing
var SanTechApp = angular.module('SanTechApp', ["ui.router"]);

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
