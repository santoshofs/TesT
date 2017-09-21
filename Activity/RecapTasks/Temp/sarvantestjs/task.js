 var a=[{
			"EmployeeId": "1001",
			"EmployeeName": "Shyam",
			"Age": "21",
			"MobileNumber": "9765468421",
			"Email": "Shyam@gmail.com"
		}, {
			"EmployeeId": "1002",
			"EmployeeName": "Saravana",
			"Age": "22",
			"MobileNumber": "9765445621",
			"Email": "Saravana@gmail.com"
		}, {
			"EmployeeId": "1003",
			"EmployeeName": "Sundhar",
			"Age": "23",
			"MobileNumber": "9767858421",
			"Email": "Sundhar@gmail.com"
		}, {
			"EmployeeId": "1004",
			"EmployeeName": "Ramesh",
			"Age": "22",
			"MobileNumber": "9875468421",
			"Email": "Ramesh@gmail.com"
		},
		{
			"EmployeeId": "1005",
			"EmployeeName": "ShyamKumar",
			"Age": "21",
			"MobileNumber": "9765468421",
			"Email": "ShyamKumar@gmail.com"
		}, {
			"EmployeeId": "1006",
			"EmployeeName": "QuadSaravana",
			"Age": "02",
			"MobileNumber": "9428445621",
			"Email": "QuadSaravana@gmail.com"
		}, {
			"EmployeeId": "1007",
			"EmployeeName": "WelSundhar",
			"Age": "23",
			"MobileNumber": "9147858421",
			"Email": "welSundhar@gmail.com"
		}, {
			"EmployeeId": "1008",
			"EmployeeName": "LokRamesh",
			"Age": "22",
			"MobileNumber": "9875756721",
			"Email": "LokRamesh@gmail.com"
		},
		{
			"EmployeeId": "1009",
			"EmployeeName": "AbinShyam",
			"Age": "31",
			"MobileNumber": "9764468421",
			"Email": "AbinShyam@gmail.com"
		},
		{
			"EmployeeId": "1010",
			"EmployeeName": "SaravanaKumar",
			"Age": "19",
			"MobileNumber": "9765447891",
			"Email": "KpSaravana@gmail.com"
		}, 
		{
			"EmployeeId": "1011",
			"EmployeeName": "ShanSundhar",
			"Age": "43",
			"MobileNumber": "9123858421",
			"Email": "ShanSundhar@gmail.com"
		}, 
		{
			"EmployeeId": "1012",
			"EmployeeName": "Rameshskumar",
			"Age": "12",
			"MobileNumber": "9875434521",
			"Email": "Rameshgfdcgf@gmail.com"
		}
	]; 
	
	
var company=[
	{
		"id":1,
		"name":"Google",
		"type":"Development and Research"
	},
	{
		"id":2,
		"name":"Facebook",
		"type":"Development and Social Media"
	},
	{
		"id":3,
		"name":"Microsoft",
		"type":"Development and Research"
	},
	{
		"id":4,
		"name":"Twitter",
		"type":"Social Media"
	},
	{
		"id":5,
		"name":"ObjectFrontier Software",
		"type":"Development and Out Sourcing"
	}
];
 
var jsonEmployeeData=[];
var jsonCompanyData=[];
	//localStorage for employee
	function load(data){
	localStorage.setItem("employeedata12",JSON.stringify(data));
	var value=localStorage.getItem("employeedata12");
	jsonEmployeeData = JSON.parse(value);
	}
	load(a);
	
	//localStorage for company
	function loadcom(data1){
	localStorage.setItem("companydata12",JSON.stringify(data1));
	var companyValue=localStorage.getItem("companydata12");
	 jsonCompanyData = JSON.parse(companyValue);
	}
	loadcom(company);

	function Company_Details() 
	{
		
		var companytable= 
						'<tr>'+
							'<th>CompanyId</th>'+
							'<th>CompanyName</th>'+
							'<th>CompanyType</th>'+
							'<th colspan="2">Action</th>'+
						'</tr>';
		
		
		for(var i=0;i<jsonCompanyData.length;i++)
		{
			
			companytable+="<tr><td>"+jsonCompanyData[i].id+"</td><td>"+jsonCompanyData[i].name+"</td><td>"+jsonCompanyData[i].type+"</td><td><button onclick='editDataCompany("+i+")'>Edit</button></td><td><button onclick='deleteCompanyRecord("+i+")'>Delete</button></td></tr>";

		}
		
		document.getElementById("employeeData").innerHTML=companytable;  
		
	}

	

	
	function Employee_Details()
	{

		var table= 
						'<tr>'+
							'<th>EmployeeId</th>'+
							'<th>EmployeeName</th>'+
							'<th>EmployeeAge</th>'+
							'<th>MobileNumber</th>'+
							'<th>Email</th>'+
							'<th colspan="2">Action</th>'+
						'</tr>';
		
		
		for(var i=0;i<jsonEmployeeData.length;i++)
		{
			
			table+="<tr><td>"+jsonEmployeeData[i].EmployeeId+"</td><td>"+jsonEmployeeData[i].EmployeeName+"</td><td>"+jsonEmployeeData[i].Age+"</td><td>"+jsonEmployeeData[i].MobileNumber+"</td><td>"+jsonEmployeeData[i].Email+"</td><td><button onclick='editDataEmployee("+i+")'>Edit</button></td><td><button onclick='deleteEmployeeRecord("+i+")'>Delete</button></td></tr>";

		}
		
		document.getElementById("employeeData").innerHTML=table;  
		
	}

	
	
	function editDataEmployee(d)
	{
		var textarea1 = '<h3>after updating your values click update button.</h3><form><textarea id="text1">'+jsonEmployeeData[d].EmployeeId+'</textarea><textarea id="text2">'+jsonEmployeeData[d].EmployeeName+'</textarea><textarea id="text3">'+jsonEmployeeData[d].Age+'</textarea><textarea id="text4">'+jsonEmployeeData[d].MobileNumber+'</textarea><textarea id="text5">'+jsonEmployeeData[d].Email+'</textarea><button onclick="updateEditEmployee('+d+')">update</button></form>';
		document.getElementById("textarea1").innerHTML = textarea1;
	}
	

	
	
	function editDataCompany(d)
	{
		var textarea2 = '<h3>after updating your values click update button.</h3><form><textarea id="text6">'+jsonCompanyData[d].id+'</textarea><textarea id="text7">'+jsonCompanyData[d].name+'</textarea><textarea id="text8">'+jsonCompanyData[d].type+'</textarea><button onclick="updateEditCompany('+d+')">update</button></form>';
		document.getElementById("textarea1").innerHTML = textarea2;
	}
	
	
	
	
	function updateEditEmployee(m)
	{
		 jsonEmployeeData[m].EmployeeId = document.getElementById("text1").value ;
		 jsonEmployeeData[m].EmployeeName = document.getElementById("text2").value;
		 jsonEmployeeData[m].Age = document.getElementById("text3").value;
		 jsonEmployeeData[m].MobileNumber = document.getElementById("text4").value;
		 jsonEmployeeData[m].Email = document.getElementById("text5").value;
		 
	
			load(jsonEmployeeData);
	    
	 
	}  
	
	
	
	function updateEditCompany(l)
	{
		 jsonCompanyData[l].id = document.getElementById("text6").value ;
		 jsonCompanyData[l].name = document.getElementById("text7").value;
		 jsonCompanyData[l].type = document.getElementById("text8").value;
				 
		 localStorage.setItem("companydata12",JSON.stringify(jsonCompanyData[l]));
	
	     Company_Details();
	 
	}

	
	var count=0;
	function deleteCompanyRecord(k) 
	{
		if(count==0){
		var del=k+1;
	document.getElementById("employeeData").deleteRow(del);}
	else{
		document.getElementById("employeeData").deleteRow(k);
	}
	count++;
	}

	
	//var count1=0;
	function deleteEmployeeRecord(p) 
	
	{
		jsonEmployeeData.splice(p,1);
		/* if(count1==0){
		var del1=p+1;
		document.getElementById("employeeData").deleteRow(del1);}
		else if(p==2){
			p=p-1;
			document.getElementById("employeeData").deleteRow(p-1);
		}
	count1++; */
	}
	
	
	
/* 	var onSave = function onSave() {
  var id =document.getElementById("1").value;
  var newfn =document.getElementById("2").value;
  var newls =document.getElementById("3").value;
  var newData ={"id":id,"FirstName":newfn,"LastName":newls};
  //localStorage.setItem("entry", JSON.stringify(newData));
    // Save allEntries back to local storage
    datavalues.push(newData);
    localStorage.setItem("localdata", JSON.stringify(datavalues));
    loadTable();
    alert("added");
} */
 