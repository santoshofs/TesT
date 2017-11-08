SanTechApp.service('userServices', function($rootScope, $state, $http, $translate) {
  this.checkLogin = function(email, pwd) {
    $.post("http://localhost:8080/SanTechFlights/SanService/control/userLogin", {
        mail: email,
        pwd: pwd
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            $rootScope.post_signin_tab = !$rootScope.post_signin_tab;
            $rootScope.pre_signin_tab = !$rootScope.pre_signin_tab;
            $rootScope.sessionHolder = data.user.id;
            $rootScope.user = data.user;
            if ($rootScope.user.role == "user") {
              alert($translate.instant("Register_Now"));
            }
          } else {
            alert("Check User Credentials.!");
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
  this.checkSession = function() {
    $.post("http://localhost:8080/SanTechFlights/SanService/control/checkSession", {
        session: $rootScope.sessionHolder
      },
      function(data, status) {
        if (data != "success") {
          $state.go('santech.flights');
        }
      }
    );
  }
  this.userSignUp = function(email, name, pwd, phone) {
    $.post("http://localhost:8080/SanTechFlights/SanService/control/newUser", {
        name: name,
        email: email,
        pwd: pwd,
        phone: phone
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            $rootScope.sessionHolder = data.user.id;
            $rootScope.user = data.user;
            $rootScope.pre_signin_tab = false;
            $rootScope.post_signin_tab = true;
            if ($rootScope.user.role == "user") {}
          } else {
            alert("Already Registered.! or Invalid Data.! ")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
  this.userAccountdetails = function() {
    $state.go('santech.user');
  }
  this.signingOut = function() {
    $.ajax({
      type: 'GET',
      url: "http://localhost:8080/SanTechFlights/SanService/control/getRidOfSession",
    });
    $rootScope.pre_signin_tab = !$rootScope.pre_signin_tab;
    $rootScope.post_signin_tab = !$rootScope.post_signin_tab;
    alert($translate.instant("We_Miss_You"));
    if (window.location.hash == '#!/santech/user') {
      $state.go('santech.home');
    }
    if (window.location.hash == '#!/santech/user/bookinghistory') {
      $state.go('santech.home');
    }
  }
  this.bookinghistory = function(u_name, u_mail) {
    $.post("http://localhost:8080/SanTechFlights/SanService/control/bookingSearch", {
        u_name: u_name,
        u_mail: u_mail
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {

            $rootScope.sessionHolder = data.bookings.t_id;
            $rootScope.BookingHistory = data.bookings;
            $state.go('santech.user.bookinghistory');
          } else {
            alert("provided credentials are wrong!")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
})
