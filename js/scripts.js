$(function() {

/*
	MENU
*/

$("#navList li").click(function(e) {
	var tarElem = e.currentTarget.id;
	var currElem = $('#navList .active').attr("id");

	$('#navList #' + String(currElem)).removeClass("active");
	$('#navList #' + String(tarElem)).addClass("active");

	$('#pageContent #' + String(currElem) + 'Section').css('left', '-500rem');
	$('#pageContent #' + String(tarElem) + 'Section').css('left', '0');
	

});
    
/*
    SCROLL EVENT
*/
/*    
$().scroll(function() {
    var currentScroll = $(window).scrollTop();
    console.log(currentScroll);
    if(0 <= currentScroll < 100) {
        console.log("1");
    } else if (100 <= currentScroll < 200) {
        console.log("2");
    } else if (200 <= currentScroll < 300) {
        console.log("3");
    } else {
        console.log("4");
    }
}); */
    
$('#pageContent').bind('mousewheel', function(e) {
    var delta = e.originalEvent.wheelDelta;
    console.log(delta);
});
});