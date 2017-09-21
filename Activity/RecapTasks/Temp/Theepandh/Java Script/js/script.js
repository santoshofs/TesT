var jsonCompaniesObjArray = [];
var jsonEmployeesObjArray = [];


//basic table cleaning and header adding
function cleanTableForCompanies(){
	document.getElementById('display-table').innerHTML = "<tr><th>ID</th><th>NAME</th><th>UNDER</th><th>ACTION</th></tr>";
}
function cleanTableForEmployees(){
	document.getElementById('display-table').innerHTML = "<tr><th>ID</th><th>NAME</th><th>DEPARTMENT</th><th>E-MAIL ADDRESS</th><th>ACTION</th></tr>";
}

//updating localStorage companies
function updateCompaniesLocalJson(){
	localStorage.setItem('jsonCompaniesData', JSON.stringify(jsonCompaniesObjArray));
}

//updating localStorage employees
function updateEmployeesLocalJson(){
	localStorage.setItem('jsonEmployeesData', JSON.stringify(jsonEmployeesObjArray));
}

//loading companies json to localStorage
function storeCompaniesJsonToLocal(){
		if(localStorage.getItem("jsonCompaniesData") == null){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				jsonData = this.responseText;
				localStorage.setItem("jsonCompaniesData",jsonData);
				jsonCompaniesObjArray = JSON.parse(localStorage.getItem('jsonCompaniesData'));
			}
		};
		xhttp.open("GET", "json/companies.json", true);
		xhttp.send();
	}
	else{
		jsonCompaniesObjArray = JSON.parse(localStorage.getItem('jsonCompaniesData'));
		console.log(JSON.stringify(jsonCompaniesObjArray));
	}
}

//loading employees json to localStorage
function storeEmployeesJsonToLocal(){
		if(localStorage.getItem("jsonEmployeesData") == null){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				jsonData = this.responseText;
				localStorage.setItem("jsonEmployeesData",jsonData);
				jsonEmployeesObjArray = JSON.parse(localStorage.getItem('jsonEmployeesData'));
			}
		};
		xhttp.open("GET", "json/employees.json", true);
		xhttp.send();
	}
	else{
		jsonEmployeesObjArray = JSON.parse(localStorage.getItem('jsonEmployeesData'));
		console.log(JSON.stringify(jsonEmployeesObjArray));
	}
}

//creating table for companies
function loadCompaniesToTable(){
	storeCompaniesJsonToLocal();
	cleanTableForCompanies();
	document.getElementById('edit-panel').style.display = 'none';
	document.getElementById('add-btn').innerHTML = "<button onclick='addPanelCompanies()' class='addt-btn'>Add Company</button>"
	var displayTable = document.getElementById('display-table');
	for(i = 0; i<jsonCompaniesObjArray.length; i++){
		if(i%2 == 0){
			displayTable.innerHTML += "<tr class='odd-row'><td>"+jsonCompaniesObjArray[i].id+"</td><td>"+jsonCompaniesObjArray[i].name+"</td><td>"+jsonCompaniesObjArray[i].type+"</td><td><center><button onclick='editPanelCompanies("+i+")' class='act-btn'>Edit</button><button onclick='delCompanies("+i+")' class='act-btn'>Delete</button></center><td></tr>"
		}
		else{
			displayTable.innerHTML += "<tr><td>"+jsonCompaniesObjArray[i].id+"</td><td>"+jsonCompaniesObjArray[i].name+"</td><td>"+jsonCompaniesObjArray[i].type+"</td><td><center><button onclick='editPanelCompanies("+i+")' class='act-btn'>Edit</button><button onclick='delCompanies("+i+")' class='act-btn'>Delete</button></center></td></tr>"
		}
	}
}

//creating table for employees
function loadEmployeesToTable(){
	storeEmployeesJsonToLocal();
	cleanTableForEmployees();
	document.getElementById('edit-panel').style.display = 'none';
	document.getElementById('add-btn').innerHTML = "<button onclick='addPanelEmployees()' class='addt-btn'>Add Employee</button>"
	var displayTable = document.getElementById('display-table');
	for(i = 0; i<jsonEmployeesObjArray.length; i++){
		if(i%2 == 0){
			displayTable.innerHTML += "<tr class='odd-row'><td>"+jsonEmployeesObjArray[i].id+"</td><td>"+jsonEmployeesObjArray[i].name+"</td><td>"+jsonEmployeesObjArray[i].dept+"</td><td>"+jsonEmployeesObjArray[i].mail+"</td><td><center><button onclick='editPanelEmployees("+i+")' class='act-btn'>Edit</button><button onclick='delEmployees("+i+")' class='act-btn'>Delete</button></center></td></tr>"
		}
		else{
			displayTable.innerHTML += "<tr><td>"+jsonEmployeesObjArray[i].id+"</td><td>"+jsonEmployeesObjArray[i].name+"</td><td>"+jsonEmployeesObjArray[i].dept+"</td><td>"+jsonEmployeesObjArray[i].mail+"</td><td><center><button onclick='editPanelEmployees("+i+")' class='act-btn'>Edit</button><button onclick='delEmployees("+i+")' class='act-btn'>Delete</button></center></td></tr>"
		}
	}
}

//Edit panel for companies and employees
function editPanelCompanies(id){
	var parentDiv = document.getElementById('edit-panel');
	parentDiv.style.display = 'block';
	parentDiv.innerHTML = "<label>ID</label><br><textarea style='edit-box'  id='cmp-id'>"+jsonCompaniesObjArray[id].id+"</textarea><br><br><label>NAME</label><br><textarea id='cmp-name' style='edit-box' >"+jsonCompaniesObjArray[id].name+"</textarea><br><br><label>UNDER</label><br><textarea style='edit-box' id='cmp-type' >"+jsonCompaniesObjArray[id].type+"</textarea><br><br><button onclick='editCompany("+id+")' class='general-btn'>Save</button><button onclick='editPanelCompanies("+id+")' class='general-btn'>Reset</button><button onclick='cancel()' class='general-btn'>Cancel</button>";
}
function editPanelEmployees(id){
	var parentDiv = document.getElementById('edit-panel');
	parentDiv.style.display = 'block';
	parentDiv.innerHTML = "<label>ID</label><br><textarea style='edit-box'  id='emp-id'>"+jsonEmployeesObjArray[id].id+"</textarea><br><br><label>NAME</label><br><textarea id='emp-name' style='edit-box' >"+jsonEmployeesObjArray[id].name+"</textarea><br><br><label>DEPARTMENT</label><br><textarea style='edit-box' id='emp-dept' >"+jsonEmployeesObjArray[id].dept+"</textarea><br><br><label>MAIL</label><br><textarea style='edit-box' id='emp-mail' >"+jsonEmployeesObjArray[id].mail+"</textarea><br><br><button onclick='editEmployee("+id+")' class='general-btn'>Save</button><button onclick='editPanelEmployees("+id+")' class='general-btn'>Reset</button><button onclick='cancel()' class='general-btn'>Cancel</button>";
}

//Add panel for companies and employees
function addPanelCompanies(){
	var parentDiv = document.getElementById('edit-panel');
	parentDiv.style.display = 'block';
	parentDiv.innerHTML = "<label>ID</label><br><textarea style='edit-box'  id='acmp-id'></textarea><br><br><label>NAME</label><br><textarea id='acmp-name' style='edit-box' ></textarea><br><br><label>UNDER</label><br><textarea style='edit-box' id='acmp-type' ></textarea><br><br><button onclick='addCompany()' class='general-btn'>Save</button><button onclick='addPanelCompanies()' class='general-btn'>Reset</button><button onclick='cancel()' class='general-btn'>Cancel</button>";
}
function addPanelEmployees(){
	var parentDiv = document.getElementById('edit-panel');
	parentDiv.style.display = 'block';
	parentDiv.innerHTML = "<label>ID</label><br><textarea style='edit-box'  id='aemp-id'></textarea><br><br><label>NAME</label><br><textarea id='aemp-name' style='edit-box' ></textarea><br><br><label>DEPARTMENT</label><br><textarea style='edit-box' id='aemp-dept' ></textarea><br><br><label>MAIL</label><br><textarea style='edit-box' id='aemp-mail' ></textarea><br><br><button onclick='addEmployee()' class='general-btn'>Save</button><button onclick='addPanelEmployees()' class='general-btn'>Reset</button><button onclick='cancel()' class='general-btn'>Cancel</button>";
}
function cancel(){
	document.getElementById('edit-panel').style.display = 'none';
}
//edit companies/ employees core
function editCompany(id){
	jsonCompaniesObjArray[id].id = document.getElementById('cmp-id').value;
	jsonCompaniesObjArray[id].name = document.getElementById('cmp-name').value;
	jsonCompaniesObjArray[id].type = document.getElementById('cmp-type').value;
	updateCompaniesLocalJson();
	loadCompaniesToTable();
}
function editEmployee(id){
	jsonEmployeesObjArray[id].id = document.getElementById('emp-id').value;
	jsonEmployeesObjArray[id].name = document.getElementById('emp-name').value;
	jsonEmployeesObjArray[id].dept = document.getElementById('emp-dept').value;
	jsonEmployeesObjArray[id].mail = document.getElementById('emp-mail').value;
	updateEmployeesLocalJson();
	loadEmployeesToTable();
}

//add companies/employees core
function addCompany(){
	var ids = document.getElementById('acmp-id').value;
	var names = document.getElementById('acmp-name').value;
	var types = document.getElementById('acmp-type').value;
	var temp = {id:ids, name:names, type:types};
	jsonCompaniesObjArray.push(temp);
	updateCompaniesLocalJson();
	loadCompaniesToTable();
}
function addEmployee(){
	var ids = document.getElementById('aemp-id').value;
	var names = document.getElementById('aemp-name').value;
	var depts = document.getElementById('aemp-dept').value;
	var mails = document.getElementById('aemp-mail').value;
	var temp = {id:ids, name:names, dept:depts, mail:mails};
	jsonEmployeesObjArray.push(temp);
	updateEmployeesLocalJson();
	loadEmployeesToTable();
}

//delete companies/employees
function delCompanies(id){
	jsonCompaniesObjArray.splice(id, 1);
	updateCompaniesLocalJson();
	loadCompaniesToTable();
}
function delEmployees(id){
	jsonEmployeesObjArray.splice(id, 1);
	updateEmployeesLocalJson();
	loadEmployeesToTable();
}