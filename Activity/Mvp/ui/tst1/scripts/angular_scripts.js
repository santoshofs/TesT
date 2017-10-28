SanTechApp.controller('account_tab_controller', function($rootScope) {
    $rootScope.pre_signin_tab = true;
    $rootScope.post_signin_tab = false;

  })

  .controller('signinCtrl', function($scope, $state, $rootScope, userServices) {
    $scope.email;
    $scope.pwd;

    $scope.login = function() {
      userServices.checkLogin($scope.email, $scope.pwd);
    }

  })

  .controller('signupCtrl', function($scope, userServices) {
    $scope.email;
    $scope.name;
    $scope.pwd;
    $scope.phone;
    $scope.signup = function() {
      userServices.userSignUp($scope.email, $scope.name, $scope.pwd, $scope.phone);
    }
  })

  .controller('userController', function($scope, userServices) {
    userServices.checkSession();
    $scope.signOut = function() {
      alert("SignOut ??");
      userServices.signingOut();
    }
  })

  .controller('flightsearchCtrl', function($scope, $state, $rootScope, userServices) {
    $scope.flight_from;
    $scope.flight_to;

    $scope.searchflight = function() {
      userServices.checkFlight($scope.flight_from, $scope.flight_to);
    }

  })
