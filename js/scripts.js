
$(function () {

    function getCurrenElementDiv() {
        var currElem = $('#navList .active').attr("id");

        return $('#pageContent #' + String(currElem) + 'Section');
    }

    function getCurrenElementNav() {
        var currElem = $('#navList .active').attr("id");

        return $('#navList #' + String(currElem));
    }
    /*
    	MENU
    */

    $("#navList li").click(function (e) {
        var tarElem = e.currentTarget.id;
        var currElemDiv = getCurrenElementDiv();
        var currElemNav = getCurrenElementNav();

        currElemNav.removeClass("active");
        $('#navList #' + String(tarElem)).addClass("active");

        currElemDiv.css('left', '-200rem');
        $('#pageContent #' + String(tarElem) + 'Section').css('left', '0');


    });

    /*
        SCROLL EVENT
    */
    
    $('#pageContent').on('mousewheel', function (e) {
        var delta = e.originalEvent.wheelDelta;
var currElemDiv = getCurrenElementDiv();
        var currElemNav = getCurrenElementNav();
        if (delta < 0) {
            if (currElemDiv.attr("id") != "contactSection") {
                currElemNav.removeClass("active");
                currElemNav.next().addClass("active");

                currElemDiv.css('left', '-200rem');
                currElemDiv.next().css('left', '0');
            }
        } else {
            if (currElemDiv.attr("id") != "homeSection") {
                currElemNav.removeClass("active");
                currElemNav.prev().addClass("active");

                currElemDiv.css('left', '-200rem');
                currElemDiv.prev().css('left', '0');
            }
        }


    });
    
    /* 
        SWIPE EVENTS 
    
    */
    $('#pageContent').bind('swipeleft', function(e) {
        var currElemDiv = getCurrenElementDiv();
        var currElemNav = getCurrenElementNav();
        if (currElemDiv.attr("id") != "contactSection") {
                currElemNav.removeClass("active");
                currElemNav.next().addClass("active");

                currElemDiv.css('left', '-200rem');
                currElemDiv.next().css('left', '0');
            }
    });

   $('#pageContent').bind('swileright', function(e) {
       var currElemDiv = getCurrenElementDiv();
        var currElemNav = getCurrenElementNav();
       if (currElemDiv.attr("id") != "homeSection") {
                currElemNav.removeClass("active");
                currElemNav.prev().addClass("active");

                currElemDiv.css('left', '-200rem');
                currElemDiv.prev().css('left', '0');
            }
   }); 

});