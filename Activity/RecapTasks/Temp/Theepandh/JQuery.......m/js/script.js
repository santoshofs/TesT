var jsonData = [];
var searchJson =[];
var damageFlag = 0;
var index = 0; // global index maintained for loading 5 data per page
var searchIndex = 0;
function loadDataToTable(){
	// inorder to favour the table reloading when a value is deleted or changed
	// a damage control is maintained so that the pages does not collapse
	if(damageFlag == 1){
		index -= 5;
	}
	if(index <= 0){
		index = 0;
	}
	// logics for printing data not more than 5 a page
	j = index + 5;
	if(j <= jsonData.length){
		
	}
	else{
		j = jsonData.length;
	}
	while(index < j){
		$('#data-table').append("<tr><td class='ids'>"+jsonData[index].id+"</td><td class='titles'>"+jsonData[index].title+"</td><td class='conts' style='width: 500px;'>"+jsonData[index].body+"</td><td class='actions'><button class='edit-btn' onclick='dataEdit("+index+")'>Edit</button>  <button class='del-btn' onclick='deleteTheRow("+index+")'>Delete</button></td></tr>");
		index++;
	}
	pageButton();// function to display the navigation buttons
	damageFlag = 0;
	makeDrag();
}
function pageButton(){
	$("#button-holder").empty();// clears the previous button and loads the new
	// logic when both prev and next is needed
	if(((index - jsonData.length)< 0)&&((index-5)>0)){
		$('#button-holder').append("<button onclick='prvBtn()'>Previous</button>  <button onclick='nxtBtn()'>Next</button>")
	}
	//logic when next only is needed
	else if(((index - jsonData.length)< 0)){
		$('#button-holder').append("<button onclick='nxtBtn()'>Next</button>")
		
	}
	// logic when prev only needed
	else{
		$('#button-holder').append("<button onclick='prvBtn()'>Previous</button>")
	}
	
}
function nxtBtn(){
	cleanTable();
	loadDataToTable();
}
function prvBtn(){
	index -= 10;
	cleanTable();
	loadDataToTable();
}
function cleanTable(){
	$('#data-table').empty();
	$('#data-table').html('<tr><th id="ident" onclick="sortBy(3)">id</th><th id="tiz" onclick="sortBy(1)">title</th><th id="conds" onclick="sortBy(2)">content</th><th class="actions">Actions</th></tr>');
}
function deleteTheRow(id){
	var conf = confirm("Do you want to delete the item?");
	if(conf == true){
	damageFlag = 1;// damage alert made for pagination collapse
	jsonData.splice(id,1);
	cleanTable();
	loadDataToTable();
	}
}

function dataEdit(ids){
	$("#edit-part").remove();
	$('#data-table').css({"width":"40%", "display":"inline-block" });
	$('<div id="edit-part" style=" margin:15px; vertical-align:top; width:40%; border:1px solid black; border-radius:10px; padding:15px; display:inline-block;">id:<textarea style="width:100%;" id="ids">'+jsonData[ids].id+'</textarea><br><br>title:<textarea style="width:100%;" id="tts">'+jsonData[ids].title+'</textarea><br><br>content:<textarea style="width:100%;" id="cnnt">'+jsonData[ids].body+'</textarea><br><br><button onclick="addUp('+ids+')">alter</button><div>').insertAfter("#data-table");
}
function addUp(ids){
	damageFlag = 1;
	jsonData[ids].id = $("#ids").val();
	jsonData[ids].title = $("#tts").val(); 
	jsonData[ids].body = $("#cnnt").val();
	$('#data-table').css({"width":"100%", "display":"inline-table" });
	$("#edit-part").remove();
	cleanTable();
	loadDataToTable();
}
function sortBy(i){
	damageFlag=1;
	switch(i){
		case 1:
		{
			jsonData.sort(function(a,b){return a.title.charCodeAt(0) - b.title.charCodeAt(0)});
			cleanTable();
			loadDataToTable();
			break;
		}
		case 2:
		{
			jsonData.sort(function(a,b){return a.body.charCodeAt(0) - b.body.charCodeAt(0)});
			cleanTable();
			loadDataToTable();
			break;
		}
		case 3:
		{
			jsonData.sort(function(a,b){return a.id - b.id});
			cleanTable();
			loadDataToTable();
			break;
		}
	}
}
function searchTiggered(){
	searchJson = [];
	var type;
	var field;
	var term = $('#search').val();
	var types = document.getElementsByName('type');
	for(i=0;i<types.length;i++){
		if(types[i].checked){
			type = types[i].value;
			break;
		}
	}
	var fields = document.getElementsByName('field');
	for(i=0;i<fields.length;i++){
		if(fields[i].checked){
			field = fields[i].value;
			break;
		}
	}
	if(type == 1){
		var patt = new RegExp("\\b"+term+"\\b");
		switch(field){
			case "1":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].id)){
						searchJson.push(i);
					}
					else if(patt.test(jsonData[i].title)){
						searchJson.push(i);
					}
					else if(patt.test(jsonData[i].body)){
						searchJson.push(i);
					}
				}
				break;
			}
			case "2":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].id)){
						searchJson.push(i);
					}
				}
				break;
			}
			case "3":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].title)){
						searchJson.push(i);
					}
				}
				break;
			}
			case "4":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].body)){
						searchJson.push(i);
					}
				}
				break;
			}
		}
	}
	else{
		var patt = new RegExp(term);
		switch(field){
			case "1":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].id)){
						searchJson.push(i);
					}
					else if(patt.test(jsonData[i].title)){
						searchJson.push(i);
					}
					else if(patt.test(jsonData[i].body)){
						searchJson.push(i);
					}
				}
				break;
			}
			case "2":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].id)){
						searchJson.push(i);
					}
				}
				break;
			}
			case "3":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].title)){
						searchJson.push(i);
					}
				}
				break;
			}
			case "4":
			{
				for(i = 0; i<jsonData.length; i++){
					if(patt.test(jsonData[i].body)){
						searchJson.push(i);
					}
				}
				break;
			}
		}		
	}
	cleanTable();
	loadSearchDataToTable();
}
function loadSearchDataToTable(){
	if(searchJson.length == 0){
		$('#data-table').html("<h1>Sorry no data found</h1>");
	}
	else{
		for(i=0;i<searchJson.length;i++){
			$('#data-table').append("<tr><td class='ids'>"+jsonData[searchJson[i]].id+"</td><td class='titles'>"+jsonData[searchJson[i]].title+"</td><td class='conts' style='width: 500px;'>"+jsonData[searchJson[i]].body+"</td><td class='actions'><button class='edit-btn' onclick='dataEdit("+searchJson[i]+")'>Edit</button>  <button class='del-btn' onclick='deleteTheRow("+searchJson[i]+")'>Delete</button></td></tr>");
		}
	}
	$('#button-holder').empty();
	$('#button-holder').append("<button onclick='returnTable()'>back</button>");
}
function returnTable(){
	cleanTable();
	loadDataToTable();
}
function makeDrag(){
	$('#ident').draggable();
	$('#tiz').draggable();
	$('#conds').draggable();
}
$(function(){
	
	$.ajax({
        url: "https://jsonplaceholder.typicode.com/posts/",
        async: false,
        dataType: 'json',
        success: function(data) {
            $.each(data,function(key, val){
				//the jsonData global variable is saved and used here as an object array.
				//the json default recived as objects and stored in the jsonData
				jsonData.push(val);
			});
        }
    });
	cleanTable(); // this function cleans the table's children
	loadDataToTable(); // this function loads the cleaned table with the data from the jsonData variable. The pagination is also implied here.
	$('#search').keypress(function(e){
		var key = e.which;
		if(key == 13){
			searchTiggered();
		}
	});
});