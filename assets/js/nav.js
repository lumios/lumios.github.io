var Lumios = {
	"window": {
		"reset": function() {
			$(".gh-widget").removeClass("visible");
			$(".tag").removeClass("select active");
		},
		"home": function() {
			$(".center").animate({
				left: "50%",
				width: "100%"
			}, 1000, "swing");

			$(".home").removeClass("fade");
			$(".tag").removeClass("select active");
		},
		"open": function() {
			$(".center").animate({
				left: 0,
				width: "200px"
			}, 1000, "swing");

			$(".home").addClass("fade");
		}
	},
	"menu": {
		"showTags": function() {
			$(".tag").addClass("active");
			$(".hover-tag").addClass("active");
		},
		"hideTags": function() {
			$(".tag").removeClass("active");
			$(".hover-tag").removeClass("active");
		},
		"selectTag": function(tag) {
			tag.addClass("select");
			tag.next(".tag").addClass("select");
		},
		"deselectTag": function(tag) {
			tag.removeClass("select");
			tag.next(".tag").removeClass("select");
		}
	}
};

$(document).ready(function() {
	$(".logo").hover(function() {
		Lumios.menu.showTags();
	});

	$(".logo-holder").mouseleave(function() {
		Lumios.menu.hideTags();
	})

	$(".hover-tag").hover(function() {
		Lumios.menu.selectTag($(this));
	}, function() {
		Lumios.menu.deselectTag($(this));
	})

	$(".tag-gh").click(function() {
		Lumios.window.reset();
		Lumios.window.open();

		$(".gh-widget").addClass("visible");
	});

	$(".tag-chat").click(function() {
		Lumios.window.reset();
		Lumios.window.open();
	});

	$(".home").click(function() {
		Lumios.window.reset();
		Lumios.window.home();
	});
});