$(document).ready(function() {
	$("#removerow").hide();
  $('#customtable').DataTable({
    "ajax": {
      "url": "https://api.myjson.com/bins/173pmd",
      "dataSrc": ""
    },
    "columns": [{
        "data": "id"
      },
      {
        "data": "name"
      },
      {
        "data": "country"
      },
      {
        "data": "city"
      }
    ]
  });
});

$(document).ready(function() {
  var table = $('#customtable').DataTable();
  $('#customtable tbody').on('click', 'tr', function() {
		$("#removerow").show();
    if ($(this).hasClass('selected')) {
      $(this).removeClass('selected');
    } else {
      table.$('tr.selected').removeClass('selected');
      $(this).addClass('selected');
    }
  });

  $('#removerow').click(function() {
		$("#removerow").hide();
		if (confirm("Do you want to remove the selected contact?")) {
      this.click;
      table.row('.selected').remove().draw(false);
    } else {
      alert("Remove Operation Canceled..!");
    }
  });
});

// $(document).ready(function() {
// 	$('#customtable tbody').on( 'click', 'button', function () {
// 			 //var data = table.row( $(this).parents('tr') ).data();
// 			 //alert( "Do you want to Remove the contact.? " );
// 			 var table = $('#customtable').DataTable();
// 			 $('#customtable tbody').on( 'click', 'tr', function () {
// 					 if ( $(this).hasClass('selected') ) {
// 							 $(this).removeClass('selected');
// 					 }
// 					 else {
// 							 table.$('tr.selected').removeClass('selected');
// 							 $(this).addClass('selected');
// 					 }
//
// 			if (confirm("Do you want to close the directory?")) {
//       this.click;
//       table.row('.selected').remove().draw( false );
//     } else {
//       alert("Delete Operation Canceled..!");
//     }
// 			 } );
// 		} );
// } );
