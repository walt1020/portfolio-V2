$(document).ready(function(){
    $('.collapsible').collapsible({

	accordian: true

    });

    $('.carousel').carousel();
  });

$("#submitButton").on("click", function() {
	event.preventDefault();
	confirm("Thanks for reaching out! I'll get back to you shortly.");
})


