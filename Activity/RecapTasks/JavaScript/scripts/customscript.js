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

function companyTable() {
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
      row.insertCell().innerHTML = "<button type='button' onclick='edit_row()' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-pencil'></span>Edit</button> <button type='button' class='btn btn-sm btn-danger'><span class='glyphicon glyphicon-trash'></span> Delete</button>";
    }
  }
}

function empTable() {
  for (var i = 0; i < (x.data.emp).length; i++) {
    sno[i] = x.data.emp[i].sno;
    cname[i] = x.data.emp[i].cname;
    location[i] = x.data.emp[i].loc;
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
      row.insertCell().innerHTML = ("<button type='button' class='btn btn-sm btn-success'><span class='glyphicon glyphicon-pencil'></span>Edit</button> <button type='button' class='btn btn-sm btn-danger'><span class='glyphicon glyphicon-trash'></span> Delete</button>");
    }
  }
}

function edit_row() {
      document.getElementById("edit_button" + no).style.display = "none";
      document.getElementById("save_button" + no).style.display = "block";
      var name = document.getElementById("name_row" + no);
      var country = document.getElementById("country_row" + no);
      var age = document.getElementById("age_row" + no);
      var name_data = name.innerHTML;
      var country_data = country.innerHTML;
      var age_data = age.innerHTML;
      id.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
      name.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
      type.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
    }

    function save_row(no) {
      var name_val = document.getElementById("name_text" + no).value;
      var country_val = document.getElementById("country_text" + no).value;
      var age_val = document.getElementById("age_text" + no).value;

      document.getElementById("name_row" + no).innerHTML = name_val;
      document.getElementById("country_row" + no).innerHTML = country_val;
      document.getElementById("age_row" + no).innerHTML = age_val;

      document.getElementById("edit_button" + no).style.display = "block";
      document.getElementById("save_button" + no).style.display = "none";
    }

    function delete_row(no) {
      document.getElementById("row" + no + "").outerHTML = "";
    }

    function add_row() {
      var new_name = document.getElementById("new_name").value;
      var new_country = document.getElementById("new_country").value;
      var new_age = document.getElementById("new_age").value;
      var table = document.getElementById("data_table");
      var table_len = (table.rows.length) - 1;
      var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age +
        "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" +
        table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

      document.getElementById("new_name").value = "";
      document.getElementById("new_country").value = "";
      document.getElementById("new_age").value = "";
    }
