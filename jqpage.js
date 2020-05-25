var height = $('#header').height();
$(window).scroll (function(){

	if($(this).scrollTop()>height){
		$('.menunav').addClass('fixed');
	}else{
		$('.menunav').removeClass('fixed');
	}
});
