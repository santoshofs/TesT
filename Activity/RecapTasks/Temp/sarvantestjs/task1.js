 var a = [{
     "EmployeeId": "1001",
     "EmployeeName": "Shyam",
     "Age": "21",
     "MobileNumber": "9765468421",
     "Email": "Shyam@gmail.com"
<<<<<<< HEAD
   },
   {
=======
   }, {
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
     "EmployeeId": "1002",
     "EmployeeName": "Saravana",
     "Age": "22",
     "MobileNumber": "9765445621",
     "Email": "Saravana@gmail.com"
<<<<<<< HEAD
   },
   {
=======
   }, {
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
     "EmployeeId": "1003",
     "EmployeeName": "Sundhar",
     "Age": "23",
     "MobileNumber": "9767858421",
     "Email": "Sundhar@gmail.com"
<<<<<<< HEAD
   },
   {
=======
   }, {
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
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
<<<<<<< HEAD
   },
   {
=======
   }, {
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
     "EmployeeId": "1006",
     "EmployeeName": "QuadSaravana",
     "Age": "02",
     "MobileNumber": "9428445621",
     "Email": "QuadSaravana@gmail.com"
<<<<<<< HEAD
   },
   {
=======
   }, {
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
     "EmployeeId": "1007",
     "EmployeeName": "WelSundhar",
     "Age": "23",
     "MobileNumber": "9147858421",
     "Email": "welSundhar@gmail.com"
<<<<<<< HEAD
   },
   {
=======
   }, {
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
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

<<<<<<< HEAD
=======

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
 var company = [{
     "id": 1,
     "name": "Google",
     "type": "Development and Research"
   },
   {
     "id": 2,
     "name": "Facebook",
     "type": "Development and Social Media"
   },
   {
     "id": 3,
     "name": "Microsoft",
     "type": "Development and Research"
   },
   {
     "id": 4,
     "name": "Twitter",
     "type": "Social Media"
   },
   {
     "id": 5,
     "name": "ObjectFrontier Software",
     "type": "Development and Out Sourcing"
   }
 ];

<<<<<<< HEAD
 var employeedata = [];
 var companydata = [];
=======
 var jsonEmployeeData = [];
 var jsonCompanyData = [];
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a

 loadEmployeeData(a);
 //localStorage for employee
 function loadEmployeeData(data) {
   var value = JSON.stringify(data);
   localStorage.setItem('employeedata12', value);
   getEmployeeData();
 }

<<<<<<< HEAD
 //getting values
 function getEmployeeData() {
   var datavalue = localStorage.getItem('employeedata12');
   employeedata = JSON.parse(datavalue);
 }
 loadCompanyData(company);

 //localStorage for company
 function loadCompanyData(data1) {
=======

 //getting values
 function getEmployeeData() {

   var datavalue = localStorage.getItem('employeedata12');
   jsonEmployeeData = JSON.parse(datavalue);
 }






 loadCompanyData(company);
 //localStorage for company
 function loadCompanyData(data1) {

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
   var value1 = JSON.stringify(data1);
   localStorage.setItem('companydata12', value1);
   getCompanyData();
 }

<<<<<<< HEAD
 //getting values
 function getCompanyData() {
   var companyValue = localStorage.getItem("companydata12");
   companydata = JSON.parse(companyValue);
 }

 function Company_Details() {
=======

 //getting values
 function getCompanyData() {

   var companyValue = localStorage.getItem("companydata12");
   jsonCompanyData = JSON.parse(companyValue);

 }




 function Company_Details() {

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
   var companytable =
     '<tr>' +
     '<th>CompanyId</th>' +
     '<th>CompanyName</th>' +
     '<th>CompanyType</th>' +
     '<th colspan="2">Action</th>' +
     '</tr>';

<<<<<<< HEAD
   for (var i = 0; i < companydata.length; i++) {
     companytable += "<tr><td>" + companydata[i].id + "</td><td>" + companydata[i].name + "</td><td>" + companydata[i].type + "</td><td><button onclick='editDataCompany(" + i + ")'>Edit</button></td><td><button onclick='deleteCompanyRecord(" + i + ")'>Delete</button></td></tr>";
   }
   var record = '<input type="button" value="create" onclick="createRecordCm()">';
   document.getElementById("employeeData").innerHTML = companytable;
   document.getElementById("textarea1").innerHTML = record;
 }

 function Employee_Details() {
=======

   for (var i = 0; i < jsonCompanyData.length; i++) {

     companytable += "<tr><td>" + jsonCompanyData[i].id + "</td><td>" + jsonCompanyData[i].name + "</td><td>" + jsonCompanyData[i].type + "</td><td><button onclick='editDataCompany(" + i + ")'>Edit</button></td><td><button onclick='deleteCompanyRecord(" + i + ")'>Delete</button></td></tr>";

   }

   var record = '<input type="button" value="create" onclick="createRecordCm()">';

   document.getElementById("employeeData").innerHTML = companytable;
   document.getElementById("textarea1").innerHTML = record;

 }




 function Employee_Details() {

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
   var table =
     '<tr>' +
     '<th>EmployeeId</th>' +
     '<th>EmployeeName</th>' +
     '<th>EmployeeAge</th>' +
     '<th>MobileNumber</th>' +
     '<th>Email</th>' +
     '<th colspan="2">Action</th>' +
     '</tr>';

<<<<<<< HEAD
   for (var i = 0; i < employeedata.length; i++) {
     table += "<tr><td>" + employeedata[i].EmployeeId + "</td><td>" + employeedata[i].EmployeeName + "</td><td>" + employeedata[i].Age + "</td><td>" + employeedata[i].MobileNumber + "</td><td>" + employeedata[i].Email + "</td><td><button onclick='editDataEmployee(" + i + ")'>Edit</button></td><td><button onclick='deleteEmployeeRecord(" + i + ")'>Delete</button></td></tr>";
   }
   var record1 = '<input type="button" value="create" onclick="createRecordEm()">';
   document.getElementById("employeeData").innerHTML = table;
   document.getElementById("textarea1").innerHTML = record1;
 }

 function editDataEmployee(d) {
   var textarea1 = '<h3>after updating your values click update button.</h3><form><textarea id="text1">' + employeedata[d].EmployeeId + '</textarea><textarea id="text2">' + employeedata[d].EmployeeName + '</textarea><textarea id="text3">' + employeedata[d].Age + '</textarea><textarea id="text4">' + employeedata[d].MobileNumber + '</textarea><textarea id="text5">' + employeedata[d].Email + '</textarea><button onclick="updateEditEmployee(' + d + ')">update</button><button  onClick="editDataEmployee(' + d + ')">Reset</button><button  onClick="cancelEm()">Cancel</button></form>';
   document.getElementById("textarea1").innerHTML = textarea1;
 }

 function editDataCompany(d) {
   var textarea2 = '<h3>after updating your values click update button.</h3><form><textarea id="text6">' + companydata[d].id + '</textarea><textarea id="text7">' + companydata[d].name + '</textarea><textarea id="text8">' + companydata[d].type + '</textarea><button onclick="updateEditCompany(' + d + ')">update</button><button  onClick="editDataCompany(' + d + ')">Reset</button><button  onClick="cancelCm()">Cancel</button></form>';
=======

   for (var i = 0; i < jsonEmployeeData.length; i++) {

     table += "<tr><td>" + jsonEmployeeData[i].EmployeeId + "</td><td>" + jsonEmployeeData[i].EmployeeName + "</td><td>" + jsonEmployeeData[i].Age + "</td><td>" + jsonEmployeeData[i].MobileNumber + "</td><td>" + jsonEmployeeData[i].Email + "</td><td><button onclick='editDataEmployee(" + i + ")'>Edit</button></td><td><button onclick='deleteEmployeeRecord(" + i + ")'>Delete</button></td></tr>";

   }

   var record1 = '<input type="button" value="create" onclick="createRecordEm()">';

   document.getElementById("employeeData").innerHTML = table;

   document.getElementById("textarea1").innerHTML = record1;

 }



 function editDataEmployee(d) {
   var textarea1 = '<h3>after updating your values click update button.</h3><form><textarea id="text1">' + jsonEmployeeData[d].EmployeeId + '</textarea><textarea id="text2">' + jsonEmployeeData[d].EmployeeName + '</textarea><textarea id="text3">' + jsonEmployeeData[d].Age + '</textarea><textarea id="text4">' + jsonEmployeeData[d].MobileNumber + '</textarea><textarea id="text5">' + jsonEmployeeData[d].Email + '</textarea><button onclick="updateEditEmployee(' + d + ')">update</button><button  onClick="editDataEmployee(' + d + ')">Reset</button><button  onClick="cancelEm()">Cancel</button></form>';
   document.getElementById("textarea1").innerHTML = textarea1;
 }




 function editDataCompany(d) {
   var textarea2 = '<h3>after updating your values click update button.</h3><form><textarea id="text6">' + jsonCompanyData[d].id + '</textarea><textarea id="text7">' + jsonCompanyData[d].name + '</textarea><textarea id="text8">' + jsonCompanyData[d].type + '</textarea><button onclick="updateEditCompany(' + d + ')">update</button><button  onClick="editDataCompany(' + d + ')">Reset</button><button  onClick="cancelCm()">Cancel</button></form>';
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
   document.getElementById("textarea1").innerHTML = textarea2;
 }

 /* function cancelCm()
 {
 	document.getElementById("textarea1").removeAttribute;
 } */

<<<<<<< HEAD
=======

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
 function cancelCm() {
   document.getElementById("textarea1").parentNode.removeChild(document.getElementById("textarea1"));
   return false;
 }

 function cancelEm() {
   document.getElementById("textarea1").parentNode.removeChild(document.getElementById("textarea1"));
   return false;
 }

 function updateEditEmployee(m) {
<<<<<<< HEAD
   employeedata[m].EmployeeId = document.getElementById("text1").value;
   employeedata[m].EmployeeName = document.getElementById("text2").value;
   employeedata[m].Age = document.getElementById("text3").value;
   employeedata[m].MobileNumber = document.getElementById("text4").value;
   employeedata[m].Email = document.getElementById("text5").value;

   loadEmployeeData(employeedata);
   Employee_Details();
 }

 function updateEditCompany(l) {
   companydata[l].id = document.getElementById("text6").value;
   companydata[l].name = document.getElementById("text7").value;
   companydata[l].type = document.getElementById("text8").value;
   loadCompanyData(companydata);
   Company_Details();
 }

 function deleteCompanyRecord(k) {
   companydata.splice(k, 1);
   loadCompanyData(companydata);
=======
   jsonEmployeeData[m].EmployeeId = document.getElementById("text1").value;
   jsonEmployeeData[m].EmployeeName = document.getElementById("text2").value;
   jsonEmployeeData[m].Age = document.getElementById("text3").value;
   jsonEmployeeData[m].MobileNumber = document.getElementById("text4").value;
   jsonEmployeeData[m].Email = document.getElementById("text5").value;


   loadEmployeeData(jsonEmployeeData);
   Employee_Details();


 }



 function updateEditCompany(l) {
   jsonCompanyData[l].id = document.getElementById("text6").value;
   jsonCompanyData[l].name = document.getElementById("text7").value;
   jsonCompanyData[l].type = document.getElementById("text8").value;

   loadCompanyData(jsonCompanyData);

   Company_Details();

 }



 function deleteCompanyRecord(k) {
   jsonCompanyData.splice(k, 1);
   loadCompanyData(jsonCompanyData);
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
   Company_Details();
   alert("data will be deleted");
 }

<<<<<<< HEAD
=======

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
 function createRecordCm() {
   var view = '<form id="viewform">' +
     'Company_ID:<input type="number" id="1" ><br><br>' +
     'Company_Name:<input type="text" id="2" ><br><br>' +
     'Company_Type:<input type="text" id="3" ></form>' +
     '<button id="save" onClick="SaveCm()">Save</button>';
   document.getElementById("textarea1").innerHTML = view;
 }

 function SaveCm() {
   var id = document.getElementById("1").value;
   var name = document.getElementById("2").value;
   var type = document.getElementById("3").value;
   var newData = {
     "id": id,
     "name": name,
     "type": type
   };

<<<<<<< HEAD
   companydata.push(newData);
   loadCompanyData(companydata);
=======
   jsonCompanyData.push(newData);
   loadCompanyData(jsonCompanyData);
>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
   Company_Details();
   alert("new record added");
 }

<<<<<<< HEAD
=======


>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
 function createRecordEm() {
   var view1 = '<form id="viewform">' +
     'EmployeeId:<input type="number" id="1" ><br><br>' +
     'EmployeeName:<input type="text" id="2" ><br><br>' +
     'Age:<input type="text" id="3" ><br><br>' +
     'MobileNumber:<input type="number" id="4" ><br><br>' +
     'Email:<input type="text" id="5" ></form>' +
     '<button  onClick="SaveEm()">Save</button>';
   document.getElementById("textarea1").innerHTML = view1;
 }

<<<<<<< HEAD
=======

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
 function SaveEm() {
   var id = document.getElementById("1").value;
   var name = document.getElementById("2").value;
   var age = document.getElementById("3").value;
   var mobileNumber = document.getElementById("4").value;
   var email = document.getElementById("5").value;
   var newData = {
     "EmployeeId": id,
     "EmployeeName": name,
     "Age": age,
     "MobileNumber": mobileNumber,
     "Email": email
   };
<<<<<<< HEAD
   employeedata.push(newData);
   loadEmployeeData(employeedata);
=======

   jsonEmployeeData.push(newData);
   loadEmployeeData(jsonEmployeeData);

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
   Employee_Details();
   alert("new record added");
 }

<<<<<<< HEAD
 function deleteEmployeeRecord(p) {
   employeedata.splice(p, 1);
   loadEmployeeData(employeedata);
   Employee_Details();
   alert(" row will be deleted");
=======


 function deleteEmployeeRecord(p)

 {
   jsonEmployeeData.splice(p, 1);
   loadEmployeeData(jsonEmployeeData);
   Employee_Details();
   alert(" row will be deleted");

>>>>>>> 1339d55a0de5ffb40121f70d625af83d2bde103a
 }
