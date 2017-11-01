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
              // $state.go('flights');
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
    $state.go('user');
	}
  this.signingOut = function(){
		$.ajax({
			  type: 'GET',
			  url: "http://localhost:8080/FinalMongoAttempt/SanService/control/getRidOfSession",
			  });
        $rootScope.pre_signin_tab = !$rootScope.pre_signin_tab;
        $rootScope.post_signin_tab = !$rootScope.post_signin_tab;
    alert("We Miss You..!");
	}

})
