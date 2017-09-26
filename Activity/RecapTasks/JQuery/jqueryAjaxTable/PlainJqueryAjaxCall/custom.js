//loadjson Data on table
$(document).ready(function() {
  $("#newcontactblock").hide();
  $("#customtable").show();
  $.get("https://api.myjson.com/bins/f6839", {
    format: "json"
  }, function(data) {
    $.each(data, function(index, val) {
      $("#customtable").append("<tr><td>" + val.id + "</td><td>" + val.name + "</td><td>" + val.country + "</td><td>" + val.city + "</td><td><button type='button' class='btn btn-sm btn-success' onclick='editcompanyrecord()'><span class='glyphicon glyphicon-pencil'></span> Edit</button> <button type='button'  class='btn btn-sm btn-danger' id='removecontact'><span class='glyphicon glyphicon-trash'></span> Delete</button></td></tr>");
    })
  });
  //$("#deletelane").show();
});

//Remove Row function
$(document).ready(function() {
  $('#customtable tbody').on( 'click', '#removecontact', function () {
    if (confirm("Do you want to Remove the contact.?")) {
      this.click;
      $(this).parents("tr").remove();
    } else {
      alert("Remove Operation Canceled..!");
    }
	 });
});

//search bar
name_source = [];
$(document).ready(function() {
  $.get('https://api.myjson.com/bins/f6839', function(data) {
    $.each(data, function(index, val) {
      var t = val.name;
      name_source[index] = t;
    });
  }, 'json');

  console.log(name_source);
  $("#searchtask").autocomplete({
    source: name_source
  })
});

//table search
function searchintable() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("customtable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
//hide show block
$(document).ready(function(){
    $("#Addnewcontact").click(function(){
        $("#Addnewcontact").hide();
        $("#newcontactblock").show();
    });
});
//new contact
$(document).ready(function(){
        $("#newcontactsubmit").click(function(){
            var newid,newname,newcountry,newcity = null;
             newid = $("#newid").val();
             newname = $("#newname").val();
             newcountry = $("#newcountry").val();
             newcity = $("#newcity").val();
             newcontact = "<tr><td>" + newid + "</td><td>" + newname + "</td><td>" + newcountry + "</td><td>" + newcity + "</td><td><button type='button' class='btn btn-sm btn-success' onclick='editcompanyrecord()'><span class='glyphicon glyphicon-pencil'></span> Edit</button> <button type='button'  class='btn btn-sm btn-danger' id='removecontact'><span class='glyphicon glyphicon-trash'></span> Delete</button></td></tr>";
            $("#customtable tbody").append(newcontact);

            $("#Addnewcontact").show();
            $("#newcontactblock").hide();
        });
});
//Delete Entire Table
$(document).ready(function() {
  $('#deletetable').click(function() {
    if (confirm("Do you want to close the directory?")) {
      this.click;
      $('#customtable').remove();
    } else {
      alert("Delete Operation Canceled..!");
    }
    $("#deletetable").hide();
  });
});

//sorting with table column
$(document).ready(function() {
  $('th').each(function(col) {

    $(this).click(function() {
      if ($(this).index() == 4) {
      return false;}
      if ($(this).is('.asc')) {
        $(this).removeClass('asc');
        $(this).addClass('desc selected');
        sortOrder = -1;
      } else {
        $(this).addClass('asc selected');
        $(this).removeClass('desc');
        sortOrder = 1;
      }
      $(this).siblings().removeClass('asc selected');
      $(this).siblings().removeClass('desc selected');
      var arrData = $('table').find('tbody >tr:has(td)').get();
      arrData.sort(function(a, b) {
        var val1 = $(a).children('td').eq(col).text().toUpperCase();
        var val2 = $(b).children('td').eq(col).text().toUpperCase();
        if ($.isNumeric(val1) && $.isNumeric(val2))
          return sortOrder == 1 ? val1 - val2 : val2 - val1;
        else
          return (val1 < val2) ? -sortOrder : (val1 > val2) ? sortOrder : 0;
      });
      $.each(arrData, function(index, row) {
        $('tbody').append(row);
      });
    });
  });
});


// //To parse and get JSON data on click
// $(document).ready(function() {
//   $("#deletelane").hide();
//   $("#customtable").hide();
//   $("#loadjson").click(function() {
//     $("#customtable").show();
//     $.get("https://api.myjson.com/bins/f6839", {
//       format: "json"
//     }, function(data) {
//       $.each(data, function(index, val) {
//         $("#customtable").append("<tr><td>" + val.id + "</td><td>" + val.name + "</td><td>" + val.country + "</td><td>" + val.city + "</td><td><button onClick=remove()>Remove</button></td></tr>");
//       })
//     });
//     $("#loadjson").hide();
//     $("#deletelane").show();
//   });
// });
