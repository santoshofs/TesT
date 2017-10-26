SanTechApp.service('customServices',function($rootScope,$state,$http){
	this.checkLogin = function(email, pwd){
		$.post("http://localhost:8080/FinalMongoAttempt/SanService/control/userLogin",
		{
		  mail: email,
		  pwd: pwd
		}
    );

	}

})
