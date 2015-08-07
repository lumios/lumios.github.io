$(document).ready(function() {
	$(".logo").hover(function() {
		$(".tag").addClass("active");
		$(".hover-tag").addClass("active");
	});

	$(".logo-holder").mouseleave(function() {
		$(".tag").removeClass("active");
		$(".hover-tag").removeClass("active");
	})

	$(".hover-tag").hover(function() {
		$(this).addClass("select");
		$(this).next(".tag").addClass("select");
		$(".tag").addClass("active");
	}, function() {
		$(this).removeClass("select");
		$(this).next(".tag").removeClass("select");
	})

	$(".tag-gh").click(function() {
		window.location.href="http://github.com/lumios";
	});

	$(".tag-chat").click(function() {
		
	});
});