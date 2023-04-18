
// fullpage customization
$(document).ready(function() {
	$('#fullpage').fullpage({
		v2compatible: false,
		verticalCentered: true,
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: false,
    scrollBar: true,
    autoScrolling: true,
		lazyLoading: true,
    slidesNavigation: true,
    controlArrows: true,
    menu: '#menu',
});
});

$(function(){
	//bool
	var btnActive = true;
	//add/remove active class for flyin onclick
	$('.slide-nav-btn').on('click', function() 		{
		if (btnActive) {
			$(this).addClass('active');
			$('.section').addClass('menu-open');
		} else {
			$(this).removeClass('active');
			$('.section').removeClass('menu-open');
		}
		btnActive = !btnActive;
		});
});
