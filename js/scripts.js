
$(function () {
    $(".ui-loader").hide();
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
    var deltaSum = 0;
    $('#pageContent').on('mousewheel', function (e) {
        var delta = e.originalEvent.wheelDelta;
        deltaSum += delta;
        var currElemDiv = getCurrenElementDiv();
        var currElemNav = getCurrenElementNav();
        
        if(deltaSum == 4*delta) {
            if (delta < 0) {
                if (currElemDiv.attr("id") != "contactSection") {
                    currElemNav.removeClass("active");
                    currElemNav.next().addClass("active");

                    currElemDiv.css('left', '-200rem');
                    currElemDiv.next().css('left', '0');
                    deltaSum = 0;
                } else {
                    deltaSum = 0;
                }
            } else {
                if (currElemDiv.attr("id") != "homeSection") {
                    currElemNav.removeClass("active");
                    currElemNav.prev().addClass("active");

                    currElemDiv.css('left', '-200rem');
                    currElemDiv.prev().css('left', '0');
                    deltaSum = 0;
                } else {
                    deltaSum = 0;
                }
            }
        }
        console.log(deltaSum);

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

   $('#pageContent').bind('swiperight', function(e) {
       var currElemDiv = getCurrenElementDiv();
        var currElemNav = getCurrenElementNav();
       if (currElemDiv.attr("id") != "homeSection") {
                currElemNav.removeClass("active");
                currElemNav.prev().addClass("active");

                currElemDiv.css('left', '-200rem');
                currElemDiv.prev().css('left', '0');
            }
   }); 
    
/*
    PROMPT FOR MOBILE DEVICES
*/
    if ((/Mobi/.test(navigator.userAgent)) || ($(window).width() < 1024)) {
        $('.prompt-message').css('display', 'block');
    }
    
    $('.close-prompt').click(function(e) {
        $('.prompt-message').css('display', 'none');
    });

});