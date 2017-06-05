$(document).ready(function(){

	// slaider
	(function(){
		$('.img-country__list').slick();
	}());

	// popup
	(function(){

		var
			popup      = $('.popup'),
			popupImg   = $('.popup-img'),
			popupVideo = $('.popup-video'),
			close      = $('.popup__close-link'),
			overlay    = $('.overlay');

		$('#img').on('click', function(e){
			e.preventDefault();

			if(!popupImg.hasClass('open')) {
				popupImg.addClass('open');
				overlay.fadeIn();	
			} else {
				popupImg.removeClass('open');
				overlay.fadeOut();
			}
		});

		$('.overlay').on('click', function(e){
			e.preventDefault();

			popup.removeClass('open');
			overlay.fadeOut();
		});

		$('.popup__close-link').on('click', function(e){
			e.preventDefault();

			popup.removeClass('open');
			overlay.fadeOut();
		});

		$('#video').on('click', function(e){
			e.preventDefault();

			if(!popupVideo.hasClass('open')) {
				popupVideo.addClass('open');
				overlay.fadeIn();	
			} else {
				popupVideo.removeClass('open');
				overlay.fadeOut();
			}
		});


	}());

	(function(){

		var iframe = $('#iframe');

		if($(window).width() <= '992'){
			$(iframe).css({"width":"300", "height":"200"})
	    }

	}());
});