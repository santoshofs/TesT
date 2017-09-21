var enapp=angular.module("myApp",['ui.router', 'myApp1','myApp2']);
enapp.config(function($stateProvider, $urlRouterProvider){
$urlRouterProvider.otherwise('/home');
$stateProvider
		.state('company',{
			url: '/company',
            templateUrl: 'company.html',
			controller:'companyController'
        })
		.state('employee',{
			url: '/employee',
            templateUrl: 'employee.html',
			controller:'employeeController'
        })
		// .state('company.edit',{
			// url: '/editCompany',
            // templateUrl: 'companyedit.html',
			// controller:'companyController'
        // })
		.state('company.newrow',{
			url:'/addnewrow',
			templateUrl:'addrow.html',
			controller:'addrowcontroller'
			
		})
		});