function loadData() {
  if (s == 1) {
    index -= 5;
  }
  if (index <= 0) {
    index = 0;
  }
  ind = index + 5;
  if (ind > data.length) {
    ind = data.length;
  }
  while (index < ind) {
    $('#table').append("<tr><td>" + data[index].EmployeeId + "</td><td>" + data[index].EmployeeName + "</td><td>" + data[index].MobileNumber + "</td></td><td>" + data[index].Email + "</td><td><button style='width:50%' onclick='editData(" + index + ")'>Edit</button>" +
      "&nbsp<button style='width:48%' onclick='deleteData(" + index + ")'>Delete</button></td></tr>");
    index++;
  }
  buttons();
  s = 0;
}

function buttons() {
  $("#textarea1").empty();
  if (((index - jsonData.length) < 0) && ((index - 5) > 0)) {
    $('#textarea1').append("<button onclick='prvBtn()'>Prev</button>  <button onclick='nxt()'>Next</button>")
  } else if (((index - jsonData.length) < 0)) {
    $('#textarea1').append("<button onclick='nxt()'>Next</button>")
  } else {
    $('#textarea1').append("<button onclick='prvBtn()'>Prev</button>")
  }
}
