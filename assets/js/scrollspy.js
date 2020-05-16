$(document).ready(function(){
	setInterval(function(){
		if ($('#aboutImg').hasClass('active')) {
			$('#aboutImg img').attr('src', 'assets/images/aboutActive.png');
		} else {
			$('#aboutImg img').attr('src', 'assets/images/aboutFade.png');
		};
		if ($('#lessonsImg').hasClass('active')) {
			$('#lessonsImg img').attr('src', 'assets/images/lessonsActive.png');
		} else {
			$('#lessonsImg img').attr('src', 'assets/images/lessonsFade.png');
		};
		if ($('#onlineImg').hasClass('active')) {
			$('#onlineImg img').attr('src', 'assets/images/onlineActive.png');
		} else {
			$('#onlineImg img').attr('src', 'assets/images/onlineFade.png');
		};
		if ($('#pricesImg').hasClass('active')) {
			$('#pricesImg img').attr('src', 'assets/images/pricesActive.png');
		} else {
			$('#pricesImg img').attr('src', 'assets/images/pricesFade.png');
		};
		if ($('#contactImg').hasClass('active')) {
			$('#contactImg img').attr('src', 'assets/images/contactActive.png');
		} else {
			$('#contactImg img').attr('src', 'assets/images/contactFade.png');
		};
	}, 100);
});
