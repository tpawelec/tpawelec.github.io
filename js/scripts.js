$(function() {

/*
	MENU
*/

$("#navList li").click(function(e) {
	var tarElem = e.currentTarget.id;
	var currElem = $('#navList .active').attr("id");

	$('#navList #' + String(currElem)).removeClass("active");
	$('#navList #' + String(tarElem)).addClass("active");

	$('#pageContent #' + String(currElem) + 'Section').css('visibility', 'hidden');
	$('#pageContent #' + String(tarElem) + 'Section').css('visibility', 'visible');
	

});
});