function strech_text(el){
    var elmt          = el,
    	tmp_text 	  = elmt.text(),
    	calc_text     = elmt.html("<span> " + elmt.text() + "</span>"),
        cont_width    = elmt.width(),
        nb_char       = elmt.text().length,
        spacing       = cont_width/nb_char,
        txt_width;
    txt_width = elmt.find('span:first').width();
        var  char_width     = txt_width/nb_char,
             ltr_spacing    = Math.round(spacing - char_width + (spacing - char_width)/nb_char); 
  		
  		elmt.text(tmp_text);
        elmt.css({
        	"letter-spacing": ltr_spacing,
        	"padding-left": ltr_spacing / 2
        });
    
}

var mobile = window.matchMedia("(max-width: 576px)");
$(document).ready(function () {

	/*
		Navigation
	*/
	var $menuListItems = $('.menu > ul > li'),
		$menu = $(".navigation .menu"),
		$contacts = $(".navigation .contacts"),
		$navImg = $(".nav-img"),
		$aboutContainer = $(".home > .container");

	$menuListItems.each(function(node) {
		strech_text($(this));
	});

	$aboutContainer.hide();

	$("section").each(function(index, sect) {
		$(sect).css({
			display: "none"
		});
	});

	$("#navButton").click(function(e) {
		e.preventDefault();

		$(this).css({
			display: "none"
		});

		$(".logo").css({
			display: "none"
		})
		if(mobile.matches) {
			$(".navigation").css({
				height: "65vh"
			});
		} else {
			$(".navigation").css({
				height: "40vh"
			});
		}

		$("section").each(function(index, sect) {
			$(sect).css({
				display: "block"
			});
		});

		$(".navigation").on("transitionend webkitTransitionEnd oTransitionEnd", function(e) {
			
			if(e.originalEvent.propertyName !== "height") {
				return;
			}
			$menu.css({
				"margin-right": 0
			});

			$contacts.css({
				display: "block",
				"margin-left": 0
				
			});
		});

		$(".navigation .contacts").on("transitionend webkitTransitionEnd oTransitionEnd", function(e) {
			if(e.originalEvent.propertyName == "margin-left") {
				$navImg.toggleClass("triggered");
				setTimeout(function() {
					$aboutContainer.fadeIn();
				}, 600);
			}
		});

		
		
	});


	$menuListItems.on("mouseover", function() {
		$(this).toggleClass("hovered");

	});

	$menuListItems.on("mouseout", function() {
		$(this).toggleClass("hovered");
		
	});


	// Navigation menu

	$menuListItems.click(function (e) {
		var sectionId = e.currentTarget.id + "Section";
		$("body, html").animate({
			scrollTop: $("#" + sectionId).offset().top
		}, 1000);
		});
	
	window.sr = ScrollReveal();
	sr.reveal("#SkillsSection .container", {
		afterReveal: function () {
			$(".skills .scale > .html5").css({
				width: "70%"
			});

			$(".skills .scale > .css3").css({
				width: "75%"
			});

			$(".skills .scale > .js").css({
				width: "55%"
			});

			$(".skills .scale > .jquery").css({
				width: "55%"
			});

			$(".skills .scale > .bootstrap").css({
				width: "40%"
			});

			$(".skills .scale > .sass").css({
				width: "40%"
			});

			$(".skills .scale > .git").css({
				width: "40%"
			});

			$(".skills .scale > .grunt").css({
				width: "40%"
			});

			$(".skills .scale > .python").css({
				width: "35%"
			});
		}});
	sr.reveal("#ProjectsSection .container");
	sr.reveal("#ContactSection .container");

	/*
		Projects
	*/

	var $projectLayer = $(".project-layer");

	$projectLayer.on("mouseover", function(e) {
		$(e.currentTarget.childNodes[1]).css({
			"margin-top": 0
		});
		if(mobile.matches) {
			$(e.currentTarget.childNodes[3]).css({
				"bottom": "15px",
				"opacity": 1
			});
		} else {
			$(e.currentTarget.childNodes[3]).css({
				"bottom": "75px",
				"opacity": 1
			});
		}
	});

	$projectLayer.on("mouseout", function(e) {
		$(e.currentTarget.childNodes[1]).css({
			"margin-top": "-100px"
		});
		$(e.currentTarget.childNodes[3]).css({
			"bottom": 0,
			"opacity": 0
		});
	});


	/* Projects MODALS */

	$("#ProjectsSection .btn").click(function(e){
		e.preventDefault();
		var projectId = e.currentTarget.id;
		$(".modal-wrapper > figure").css({
			display: "block"
		});

		$(".modal-wrapper ." + projectId + "-caption").css({
			display: "block"
		});
		$(".img-wrapper > img").attr("src", "img/projects/mockup-" + projectId + ".png");
		$(".img-wrapper > img").attr("alt", projectId + " mockup");
		$(".modal-background").css({
			visibility: "visible",
			opacity: 1
		});

	});
	
	$(".modal-wrapper > .close").click(function (e){
		$(".modal-wrapper > *:not(p)").css({
			display: "none"
		});
		$(".modal-background").css({
			visibility: "hidden",
			opacity: 0
		});
	});



	/* 
		Contact form
	*/

	//update this with your $form selector
    var form_id = "contactForm";

    var data = {
        "access_token": "ffcnbkspiv1ud2cg5mndnlap"
    };

    function onSuccess() {
        // remove this to avoid redirect
        sendButton.val('Email successfuly sent');
    }

    function onError(error) {
        // remove this to avoid redirect
        sendButton.val('Email could not be sent');
    }

    var sendButton = $("#" + form_id + " [name='send']");

    function send() {
        sendButton.val('Sending…');
        sendButton.prop('disabled',true);

        var sender = $("#" + form_id + " [name='sender']").val();
        var reply_to = $("#" + form_id + " [name='reply_to']").val();
        var subject = $("#" + form_id + " [name='subject']").val();
        var message = $("#" + form_id + " [name='text']").val();
        data.subject = subject;
        data.text = "E-Mail: " + reply_to + "\nName: " + sender + "\n\n" + message;

        $.post('https://postmail.invotes.com/send',
            data,
            onSuccess
        ).fail(onError);

        return false;
    }

    sendButton.on('click', function(e) {
    	send();
    });

    var $form = $("#" + form_id);
    $form.submit(function( event ) {
        event.preventDefault();
    });
});
