var employeeobjcts = [{
    "id": "1",
    "name": "Santosh",
    "type": "Legend"
  },
  {
    "id": "2",
    "name": "Kaba",
    "type": "Ultra Legend"
  },
  {
    "id": "3",
    "name": "Munishkanth",
    "type": "Alien Level"
  },
  {
    "id": "4",
    "name": "Alia",
    "type": "kid"
  },
  {
    "id": "5",
    "name": "Shraddha",
    "type": "legend"
  },
  {
    "id": "6",
    "name": "DocStrange",
    "type": "kid"
  }
];

var companyobjects = [{
    "sno": "1",
    "cname": "SanTech",
    "loc": "Chennai"
  },
  {
    "sno": "2",
    "cname": "Google",
    "loc": "Banglore"
  },
  {
    "sno": "3",
    "cname": "EA",
    "loc": "New-York"
  },
  {
    "sno": "4",
    "cname": "Action",
    "loc": "Japan"
  },
  {
    "sno": "5",
    "cname": "Ubisoft",
    "loc": "Pune"
  },
  {
    "sno": "6",
    "cname": "Gameloft",
    "loc": "Delhi"
  }
];

var companyjsondata = [];
var employeejsondata = [];

//passing json obj to the function
localinitcompanydata(companyobjects);
localinitemployeedata(employeeobjcts);

//init local storage for company
function localinitcompanydata(comdata) {
  var comvalue = JSON.stringify(comdata);
  localStorage.setItem('companydatum', comvalue);
  feedcompanydata();
}
//load the company data from local storage
function feedcompanydata() {
  var companydatatemp = localStorage.getItem("companydatum");
  companyjsondata = JSON.parse(companydatatemp);
}

//init local storage for employee
function localinitemployeedata(empdata) {
  var empvalue = JSON.stringify(empdata);
  localStorage.setItem('employeedatum', empvalue);
  feedemployeedata();
}
//load the employee data from local storage
function feedemployeedata() {
  var employeedatatemp = localStorage.getItem("employeedatum");
  employeejsondata = JSON.parse(employeedatatemp);
}

function loadcompanytable() {
  document.getElementById("editcominput").style.display = "none";
  var companytable = '<tr></tr>';
  for (var i = 0; i < companyjsondata.length; i++) {
    companytable += "<tr><td>" + companyjsondata[i].sno + "</td><td>" + companyjsondata[i].cname + "</td><td>" + companyjsondata[i].loc + "</td><td><button type='button' class='btn btn-sm btn-success' onclick='editcompanyrecord(" + i + ")'><span class='glyphicon glyphicon-pencil'></span> Edit</button><button type='button'  class='btn btn-sm btn-danger' onclick='deleteCompanyRecord(" + i + ")'><span class='glyphicon glyphicon-trash'></span> Delete</button></td>";
  }
  //  var newcomrecord = '<input type="button" value="create" onclick="createRecordCm()">';
  var newcomrecord = document.getElementById('addnewcomrecord');
  document.getElementById("companytable").innerHTML = companytable;
  document.getElementById("newcominput").innerHTML = newcomrecord;
}
function editcompanyrecord(d){
  document.getElementById("editcominput").style.display = "block";
  // document.getElementById('text6').value =companyjsondata[d].cname;
  // var companyeditarea = '<form><input id="text7" >' +  '</input><textarea id="text7">' + companyjsondata[d].cname + '</textarea><textarea id="text8">' + companyjsondata[d].loc + '</textarea><button onclick="updateEditCompany(' + d + ')">update</button><button  onClick="editDataCompany(' + d + ')">Reset</button><button  onClick="cancelCm()">Cancel</button></form>';
  // document.getElementById("companyeditspace").innerHTML = companyeditarea;
  document.getElementById('comidform').value =companyjsondata[d].sno;
  document.getElementById('comnameform').value =companyjsondata[d].cname;
  document.getElementById('composform').value =companyjsondata[d].loc;
}
