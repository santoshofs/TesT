// SanTechApp.service('userServices',function($rootScope,$state,$http){
// 	this.checkLogin = function(email, pwd){
// 		$.post("http://localhost:8080/FinalMongoAttempt/SanService/control/userLogin",
// 		{
// 		  email: email,
// 		  pwd: pwd
// 		},
// 		function(data,status){
// 			if(status == "success"){
// 				if(data.status == "success"){
// 					$rootScope.sessionHolder = data.user.id;
// 					$rootScope.user = data.user;
// 					if($rootScope.user.role == "user"){
// 						alert("provided credentials are correct!");
// 					}
// 				}
// 				else{
// 					alert("provided credentials are wrong!");
// 				}
// 			}else{
// 				alert("something went wrong - server error");
// 			}
// 		}
//     );
//
// 	}
//
// })


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
						$state.go('dashboard.user');
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
					$state.go('signin');
				}
			}
		);
	}
	this.userSignUp = function(email,name,pwd,phone,region){
		$.post("http://localhost:8080/FinalMongoAttempt/SanService/control/newUser",
		{
		  name: name,
		  email: email,
		  pwd: pwd,
		  region: region,
		  phone: phone
		},
		function(data,status){
			if(status == "success"){
				if(data.status == "success"){
					$rootScope.sessionHolder = data.user.id;
					$rootScope.user = data.user;
					if($rootScope.user.role == "user"){
						$state.go('dashboard.user');
					}
					else if($rootScope.user.role == "insurance"){
						$state.go('dashboard.insurance');
					}
					else if($rootScope.user.role == "admin"){
						$state.go('dashboard.admin');
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
			  url: "http://localhost:8080/carshop/Jserv/control/getRidOfSession",
			  });
		$state.go('signin');
	}
})
