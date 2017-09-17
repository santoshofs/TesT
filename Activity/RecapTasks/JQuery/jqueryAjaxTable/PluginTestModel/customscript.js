$(document).ready(function() {
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
      },
      {
        "targets": -1,
        "data": null,
        "defaultContent": "<button>Remove</button>"
      }
    ]
  });
	$('#customtable tbody').on( 'click', 'button', function () {
			 //var data = table.row( $(this).parents('tr') ).data();
			 alert( "Do you want to Remove the contact.? " );
	 } );
});
