jQuery(function(){
	jQuery('ul.sf-menu').superfish({
		speed: 400,
		animation:  {opacity:'show',height:'show'}
	});
});
		
$(document).ready(function(){	
	$("#slider").easySlider({
		auto: true,
		continuous: true, 
		speed: 500,
		prevText: '',
		nextText: ''
	});			
});
