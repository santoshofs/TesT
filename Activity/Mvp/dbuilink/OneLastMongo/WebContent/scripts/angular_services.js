
SanTechApp.service('userServices',function($rootScope,$state,$http){
	this.checkLogin = function(email, pwd){
		$.post("http://localhost:8080/FinalMongoAttempt/SanService/control/userLogin",
		{
		  mail: email,
		  pwd: pwd
		},
		function(data,status){
			if(status == "success"){
				if(data.status == "success"){
					$rootScope.sessionHolder = data.user.id;
					$rootScope.user = data.user;
					if($rootScope.user.role == "user"){
						alert("provided credentials are correct!");
						$state.go('user');
					}

				}
				else{
					alert("provided credentials are wrong!")
				}
			}else{
				alert("something went wrong - server error");
			}
		});
	}
	this.checkSession = function(){
		$.post("http://localhost:8080/FinalMongoAttempt/SanService/control/checkSession",
		{
		  session: $rootScope.sessionHolder
		},
		function(data,status){
				if(data != "success")
				{
					$state.go('user');
				}
			}
		);
	}
	this.userSignUp = function(email,name,pwd,phone){
		$.post("http://localhost:8080/FinalMongoAttempt/SanService/control/newUser",
		{
		  name: name,
		  email: email,
		  pwd: pwd,
		  phone: phone
		},
		function(data,status){
			if(status == "success"){
				if(data.status == "success"){
					alert("details submitted!");
					$rootScope.sessionHolder = data.user.id;
					$rootScope.user = data.user;
					if($rootScope.user.role == "user"){
						$state.go('user');
					}
				}
				else{
					alert("Could not signup!")
				}
			}else{
				alert("something went wrong - server error");
			}
		});
	}

	this.signingOut = function(){
		$.ajax({
			  type: 'GET',
			  url: "http://localhost:8080/FinalMongoAttempt/SanService/control/getRidOfSession",
			  });
		$state.go('home');
		alert("SignOut Successfull!");
	}
})
