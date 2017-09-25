/* ng-app - To define the application scope.
ng-controller - To define controller scope.
ng-model - To bind data with view and opposite.
$valid - To check the validation of the form.
ng-show - To display an entity only when a certain condition is satisfied.
ng-hide - To hide an entity only when a certain condition is satisfied.
ng-repeat - To repeat over the objects in array.
ng-click - To bind function with click event.
ng-submit - To bind function with form submit event.
We have used editBook() and deleteBook() function calls with the parameter $index which is actually the index of the elements inside the book array.
 */
(function(){
	//defining app name
	var app = angular.module('EmpApp',[]);
	//defining app controller
	app.controller('EmpController',['$scope',function($scope){
		$scope.Emps = [
			{ename:"Rajkamal",edepartment:"UI",erole:"Design",etype:"Permanent"},
			{ename:"Vicky",edepartment:"Testing",erole:"WhiteBox Texting",etype:"Permanent"},
			{ename:"Ramanathan",edepartment:"Android",erole:"App developing",etype:"Temporaty"},
			{ename:"Sivakaran",edepartment:"DB",erole:"DB maintanence",etype:"Temporaty"},
			{ename:"aravind",edepartment:"UI",erole:"Design",etype:"Temporaty"},
			{ename:"saravana",edepartment:"Testing",erole:"BlackBox Testing",etype:"Permanent"},
			{ename:"kannan",edepartment:"DB",erole:"DB maintanence",etype:"Permanent"}
		];


		$scope.Emp = {};

		//utility function definitions
		$scope.addEmp = function(Emp){
			$scope.Emps.push(Emp);
			$scope.Emp = {};
			document.getElementById("empform").style.display = "none";
		}

		$scope.editEmp = function(index){
			$scope.editId = index;
			$scope.Emp = $scope.Emps[index];
						document.getElementById("empform").style.display = "block";
		}

		$scope.updateEmp = function(Emp){
			$scope.Emps[$scope.editId] = Emp;
			$scope.editId = undefined;
			$scope.Emp = {};
			document.getElementById("empform").style.display = "none";
		}

		$scope.deleteEmp = function(index){
			$scope.Emps.splice(index,1);
		}




		$scope.Comps = [
			{cname:"OFS",cloc:"CHENNAI",ctype:"SERVICE"},
			{cname:"HONEYWELL",cloc:"MADURAI",ctype:"PRODUCT"},
			{cname:"TVS",cloc:"CHENNAI",ctype:"SERVICE"},
			{cname:"GOOGLE",cloc:"USA",ctype:"PRODUCT"},
			{cname:"IBM",cloc:"USA",ctype:"PRODUCT"}
		];


		$scope.Comp = {};
		$scope.addComp = function(Comp){
			$scope.Comps.push(Comp);
			$scope.Comp = {};
			document.getElementById("Compform").style.display = "none";
		}
		$scope.editComp = function(index){
			$scope.editId = index;
			$scope.Comp = $scope.Comps[index];
						document.getElementById("Compform").style.display = "block";
		}
		$scope.updateComp = function(Comp){
			$scope.Comps[$scope.editId] = Comp;
			$scope.editId = undefined;
			$scope.Comp = {};
			document.getElementById("Compform").style.display = "none";
		}

		$scope.deleteComp = function(index){
			$scope.Comps.splice(index,1);
		}



	}]);
})();


function Compformdis(){
document.getElementById("Compform").style.display = "block";
}


function formdis(){
	document.getElementById("empform").style.display = "block";
}



function com(){
	document.getElementById("company").style.display = "block";
	document.getElementById("employee").style.display = "none";
}

function emp(){
	document.getElementById("company").style.display = "none";
	document.getElementById("employee").style.display = "block";
}

var local = (function(){
    var setData = function(key,obj){
        var values = JSON.stringify(obj);
        localStorage.setItem(key,values);
    }
    var getData = function(key){
        if(localStorage.getItem(key) != null){
        return JSON.parse(localStorage.getItem(key));
        }else{
            return false;
        }
    }
    var updateDate = function(key,newData){
        if(localStorage.getItem(key) != null){
            var oldData = JSON.parse(localStorage.getItem(key));
            for(keyObj in newData){
                oldData[keyObj] = newData[keyObj];
            }
            var values = JSON.stringify(oldData);
            localStorage.setItem(key,values);
        }else{
            return false;
        }
    }
    return {set:setData,get:getData,update:updateDate}
})();
