x = {
  "data": {
    "emp": [{
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
    ],
    "com": [{
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
    ]
  }
}
id = [];
name = [];
type = [];
sno = [];
cname = [];
loc = [];
//Company Table
function companyTable() {
  document.getElementById("newcominput").style.display = "none";
  for (var i = 0; i < (x.data.com).length; i++) {
    sno[i] = x.data.com[i].sno;
    cname[i] = x.data.com[i].cname;
    location[i] = x.data.com[i].loc;
  }
  for (var i = 0; i < 6; i++) {
    console.log(x.data.com[i].cname);
    console.log(x.data.com[i].loc);
  }
  for (i = 0; i < (x.data.com).length; i++) {
    var row = document.getElementById("companytable").insertRow();
    for (j = 0; j < 1; j++) {
      row.insertCell().innerHTML = (x.data.com[i].sno);
      row.insertCell().innerHTML = (x.data.com[i].cname);
      row.insertCell().innerHTML = (x.data.com[i].loc);
      var b = (x.data.com[i].sno);
      row.insertCell().innerHTML = ("<button type='button' class='btn btn-sm btn-success' ><span class='glyphicon glyphicon-pencil'></span> Edit</button> <button type='button'  class='btn btn-sm btn-danger' onClick='removecompanyfunc(\"" + (x.data.com[i]) + "\");'><span class='glyphicon glyphicon-trash'></span> Delete</button>");
    }
  }
}
//Employee Table
function empTable() {
  document.getElementById("newempinput").style.display = "none";
  for (var i = 0; i < (x.data.emp).length; i++) {
    id[i] = x.data.emp[i].id;
    name[i] = x.data.emp[i].name;
    type[i] = x.data.emp[i].type;
  }
  for (var i = 0; i < 6; i++) {
    console.log(x.data.emp[i].name);
    console.log(x.data.emp[i].type);
  }
  for (i = 0; i < (x.data.emp).length; i++) {
    var row = document.getElementById("employeetable").insertRow();
    for (j = 0; j < 1; j++) {
      row.insertCell().innerHTML = (x.data.emp[i].id);
      row.insertCell().innerHTML = (x.data.emp[i].name);
      row.insertCell().innerHTML = (x.data.emp[i].type);

      row.insertCell().innerHTML = ("<button type='button' class='btn btn-sm btn-success' ><span class='glyphicon glyphicon-pencil'></span> Edit</button> <button type='button'  class='btn btn-sm btn-danger' onClick='removeempfunc(\"" + (x.data.emp[i]) + "\");'><span class='glyphicon glyphicon-trash'></span> Delete</button>");
    }
  }
}

function removecompanyfunc(c) {
  console.log("button" + c);
  var s = c++;
  ++s;
  console.log(s);
  document.getElementById("companytable").deleteRow(s);
  delete x.data.com[s];
  local.set('value', x.data.com);
}

function removeempfunc(c) {
  console.log("button" + c);
  var s = c++;
  ++s;

  console.log(s);
  document.getElementById("employeetable").deleteRow(s);
  delete x.data.emp[s];
  local.set('value', x.data.emp);
}

function addnewemp() {
  document.getElementById("newempinput").style.display = "block";
  // var row = document.getElementById("employeetable").insertRow();
  // row.insertCell().innerHTML = ("7");
  // row.insertCell().innerHTML = ("Tushar");
  // row.insertCell().innerHTML = ("Comedy");
  // x.data.items.push({
  //   "id": "7",
  //   "name": "Douglas Adams",
  //   "type": "comedy"
  // });
  // local.set('value', x.data.items);

}
function addnewcom() {
  document.getElementById("newcominput").style.display = "block";
  // var row = document.getElementById("employeetable").insertRow();
  // row.insertCell().innerHTML = ("7");
  // row.insertCell().innerHTML = ("Tushar");
  // row.insertCell().innerHTML = ("Comedy");
  // x.data.items.push({
  //   "id": "7",
  //   "name": "Douglas Adams",
  //   "type": "comedy"
  // });
  // local.set('value', x.data.items);

}
function hideaddemp() {
  document.getElementsById("newempinput").style.display="none";
}
function hideaddcom() {
  document.getElementsById("newempinput").style.display="none";
}
//local storage
var local = (function() {
  var setData = function(key, obj) {
    var values = JSON.stringify(obj);
    localStorage.setItem(key, values);
  }
  var getData = function(key) {
    if (localStorage.getItem(key) != null) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return false;
    }
  }
  var updateDate = function(key, newData) {
    if (localStorage.getItem(key) != null) {
      var oldData = JSON.parse(localStorage.getItem(key));
      for (keyObj in newData) {
        oldData[keyObj] = newData[keyObj];
      }
      var values = JSON.stringify(oldData);
      localStorage.setItem(key, values);
    } else {
      return false;
    }
  }
  return {
    set: setData,
    get: getData,
    update: updateDate
  }
})();
