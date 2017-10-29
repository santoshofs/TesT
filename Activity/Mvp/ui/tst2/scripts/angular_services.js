SanTechApp.service('userServices', function($rootScope, $state, $http) {
  this.checkLogin = function(email, pwd) {
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/userLogin", {
        mail: email,
        pwd: pwd
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            $rootScope.sessionHolder = data.user.id;
            $rootScope.user = data.user;
            if ($rootScope.user.role == "user") {
              alert("Welcome back!");

              $rootScope.pre_signin_tab = !$rootScope.pre_signin_tab;
              $rootScope.post_signin_tab = !$rootScope.post_signin_tab;
              $state.go('flights');
            }

          } else {
            alert("Check User Credentials.!")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
  this.checkSession = function() {
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/checkSession", {
        session: $rootScope.sessionHolder
      },
      function(data, status) {
        if (data != "success") {
          $state.go('flights');
        }
      }
    );
  }
  this.userSignUp = function(email, name, pwd, phone) {
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/newUser", {
        name: name,
        email: email,
        pwd: pwd,
        phone: phone
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            alert("details submitted!");
            $rootScope.sessionHolder = data.user.id;
            $rootScope.user = data.user;
            if ($rootScope.user.role == "user") {
              $rootScope.pre_signin_tab = !$rootScope.pre_signin_tab;
              $rootScope.post_signin_tab = !$rootScope.post_signin_tab;
              $state.go('flights');
            }
          } else {
            alert("Already Registered.! or Invalid Data.! ")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }

  this.signingOut = function() {
    $.ajax({
      type: 'GET',
      url: "http://localhost:8080/FinalMongoAttempt/SanService/control/getRidOfSession",
    });
    $state.go('home');
    alert("SignOut Successfull!");
  }

  this.checkFlight = function(flight_from, flight_to) {
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/flightSearch", {
        flight_from: flight_from,
        flight_to: flight_to
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            $rootScope.sessionHolder = data.flight.flight_id;
            $rootScope.flight = data.flight; {
              alert("flight fetch success!");
            }

          } else {
            alert("provided credentials are wrong!")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
})
