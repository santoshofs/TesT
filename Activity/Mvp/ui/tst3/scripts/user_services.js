SanTechApp.service('userServices', function($rootScope, $state, $http) {
  this.checkLogin = function(email, pwd) {
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/userLogin", {
        mail: email,
        pwd: pwd
      },
      function(data, status) {
        if (status == "success") {
          $rootScope.post_signin_tab = !$rootScope.post_signin_tab;
          $rootScope.pre_signin_tab = !$rootScope.pre_signin_tab;
          if (data.status == "success") {
            $rootScope.sessionHolder = data.user.id;
            $rootScope.user = data.user;
            if ($rootScope.user.role == "user") {
              $state.go('santech.flights');
              alert("Welcome back!");
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
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/checkSession", {
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
              $rootScope.pre_signin_tab = false;
              $rootScope.post_signin_tab = true;
              // $state.go('flights');
            }
          } else {
            alert("Already Registered.! or Invalid Data.! ")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
  this.userAccountdetails = function(){
    $state.go('santech.user');
	}
  this.signingOut = function(){
		$.ajax({
			  type: 'GET',
			  url: "http://localhost:8080/FinalMongoAttempt/SanService/control/getRidOfSession",
			  });
        $rootScope.pre_signin_tab = !$rootScope.pre_signin_tab;
        $rootScope.post_signin_tab = !$rootScope.post_signin_tab;
    alert("We Miss You..!");
    if(window.location.hash =='#!/santech/user'){
      $state.go('santech.home');
    }
	}
  this.bookinghistory = function(u_name, u_mail) {
    // alert(u_name);
    // alert(u_mail);
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/bookingSearch", {
        u_name: u_name,
        u_mail: u_mail
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            alert("fetch success")
            // $rootScope.sessionHolder = data.flights.flight_id;
            // $rootScope.availableFlights = data.flights; {
            //   // alert(data.flights[0].flight_from);
            //   $state.go('santech.flights.list');
            // }

          } else {
            alert("provided credentials are wrong!")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }

})
