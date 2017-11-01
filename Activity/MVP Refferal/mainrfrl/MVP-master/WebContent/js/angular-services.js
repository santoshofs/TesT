mainPage.service('userServices',function($rootScope,$state,$http){
	this.checkLogin = function(email, pwd){
		$.post("http://localhost:8080/carshop/Jserv/control/userLogin",
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
					alert("provided credentials are wrong!")
				}
			}else{
				alert("something went wrong - server error");
			}
		});
	}
	this.checkSession = function(){
		$.post("http://localhost:8080/carshop/Jserv/control/checkSession",
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
		$.post("http://localhost:8080/carshop/Jserv/control/newUser",
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
	this.sellCar = function(formdata){
		$.ajax( {
      url: 'http://localhost:8080/carshop/Jserv/control/newUsedCar',
      type: 'POST',
      data: formdata,
      processData: false,
      contentType: false,
      success: function(data){
      	alert(data.status)
      }
    } );
	}
	this.sellNewCar = function(formdata){
		$.ajax( {
      url: 'http://localhost:8080/carshop/Jserv/control/newCar',
      type: 'POST',
      data: formdata,
      processData: false,
      contentType: false,
      success: function(data){
      	alert(data.status)
      }
    } );
	}
	this.fetchAllCars = function(){
		var avail; 
		$.ajax( {
      url: 'http://localhost:8080/carshop/Jserv/control/getAllCars',
      type: 'GET',
	  async:false,
      success: function(data){
      	avail =  data;
      }
    } );
	return avail;
	}
	this.setForCarDetail=function(carId){
		localStorage.setItem("showCar",carId);
		$state.go('dashboard.car');
	}
	this.getCarDetails = function(){
		var carId = localStorage.getItem("showCar");
		var datas;
		
		$.ajax({
		  type: 'GET',
		  url: "http://localhost:8080/carshop/Jserv/control/getCarDetails?carid="+carId,
		  async:false,
		  success:function(data){
				if(data.status == "success"){
					localStorage.setItem("dataOb",data.car);
					datas = data.car;
				}
				else{
					alert('data failed');
				}
			} 
		  
		});
		return datas
	}
	this.getCarDetailCmp = function(carId){
		var datas;
		
		$.ajax({
		  type: 'GET',
		  url: "http://localhost:8080/carshop/Jserv/control/getCarDetails?carid="+carId,
		  async:false,
		  success:function(data){
				if(data.status == "success"){
					localStorage.setItem("dataOb",data.car);
					datas = data.car;
				}
				else{
					alert('data failed');
				}
			} 
		  
		});
		return datas
	}
	this.signingOut = function(){
		$.ajax({
			  type: 'GET',
			  url: "http://localhost:8080/carshop/Jserv/control/getRidOfSession",
			  });
		$state.go('signin');
	}
	this.searchCarByTerm = function(terms){
		var datas;
		
		$.ajax({
		  type: 'GET',
		  url: "http://localhost:8080/carshop/Jserv/control/searchByTerm?term="+terms,
		  async:false,
		  success:function(data){
				if(data.status == "success"){
					//localStorage.setItem("dataOb",data.car);
					datas = data.cars;
				}
				else{
					alert('No car found');
				}
			} 
		  
		});
		return datas
	}
	this.submitNewInsurance = function(insurance){
		
		$.post("http://localhost:8080/carshop/Jserv/control/saveNewInsurance",
				{
					name:insurance.name,
					val:insurance.value,
					prem:insurance.prem,
					zDep:insurance.zDep,
					claim:insurance.claims,
					own:insurance.own,
					owner:insurance.owner,
					lib:insurance.tLiable,
					cd:insurance.cd
				},
				function(data,status)
				{
					if(status == "success"){
						alert(data);
					}
				}
		)
	}
	this.postNews = function(newsDetails){
		$.ajax( {
		      url: 'http://localhost:8080/carshop/Jserv/control/saveNewNews',
		      type: 'POST',
		      data: newsDetails,
		      processData: false,
		      contentType: false,
		      success: function(data){
		      	alert("News upload " + data)
		      }
		    } );
	}
	this.loadDailyNews = function(){
		$.ajax({
			  type: 'GET',
			  url: "http://localhost:8080/carshop/Jserv/control/getStarterNews",
			  async:false,
			  success:function(data){
					if(data.status == "success"){
						//localStorage.setItem("dataOb",data.car);
						datas = data.news;
					}
					else{
						alert('No News found');
					}
				} 
			  
			});
			return datas
	}
	this.getNewsData = function(ids){
		var newsData;
		$.ajax( {
		      url: 'http://localhost:8080/carshop/Jserv/control/getNews',
		      type: 'POST',
		      data: {'id':ids},
		      async:false,
		      success: function(data){
		      	if(data.status == "success"){
		      		newsData = data.news;
		      	}
		      	else{
		      		alert("Data not recived");
		      	}
		      }
		    } );
		return newsData;
	}
	this.loadHomeInsurance = function(){
		var datas;
		$.ajax({
			  type: 'GET',
			  url: "http://localhost:8080/carshop/Jserv/control/getInsurances",
			  async:false,
			  success:function(data){
					if(data.status == "success"){
						//localStorage.setItem("dataOb",data.car);
						datas = data.insurances;
					}
					else{
						alert('No News found');
					}
				} 
			  
			});
			return datas
	}
	this.loadInsuData = function(){
		var ids = localStorage.getItem('show-insu');
		var newsData;
		$.ajax( {
		      url: 'http://localhost:8080/carshop/Jserv/control/getInsu',
		      type: 'POST',
		      data: {'id':ids},
		      async:false,
		      success: function(data){
		      	if(data.status == "success"){
		      		newsData = data.insurance;
		      	}
		      	else{
		      		alert("Data not recived");
		      	}
		      }
		    } );
		return newsData;
		
	}
	this.loadUserCars = function(){
		$.ajax( {
		      url: 'http://localhost:8080/carshop/Jserv/control/getMyCars',
		      type: 'POST',
		      async:false,
		      success: function(data){
		      	if(data.status == "success"){
		      		newsData = data.cars;
		      	}
		      	else{
		      		alert("Data not recived");
		      	}
		      }
		    } );
		return newsData;
	}
	this.removeACar = function(ids){
		var newsData;
		$.ajax( {
		      url: 'http://localhost:8080/carshop/Jserv/control/removeCar',
		      type: 'POST',
		      data: {'id':ids},
		      async:false,
		      success: function(data){
		      	if(data == "success"){
		      		newsData = true;
		      	}
		      	else{
		      		alert("Data not recived");
		      		newsData = false;
		      	}
		      }
		    } );
		return newsData;
	}
})
