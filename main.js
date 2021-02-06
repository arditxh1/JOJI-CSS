$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	console.log(wScroll);
	$('.for').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	})
	$('.log').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	})
	if (wScroll >= 400) {
		$('.m').fadeIn(1000);
	}
})

$(document).ready ( function () {
	$('.menu-burger').on('click', function() {
	  $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
	  $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
	});
});
