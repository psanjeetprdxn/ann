$(document).ready(function(){
  $('.slides').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    nextArrow:$('.next'),
    prevArrow:$('.prev')
  });
});


$(document).ready(function() {
  // Initially showing social class <div> and hiding rest of them.
  $('#ourHolder').children('div.social').show();
  $('#ourHolder').children('div:not(.social)').hide();

	$('#filterOptions li span').click(function() {
		// fetch the class of the clicked item
		let ourClass = $(this).attr('class');

		// reset the active class on all the buttons
		$('#filterOptions li').removeClass('active');
		// update the active state on our clicked button
		$(this).parent().addClass('active');

		if(ourClass == 'social') {
			// show all our items
			$('#ourHolder').children('div.social').show();

      // hide all elements that don't share ourClass
			$('#ourHolder').children('div:not(.' + ourClass + ')').hide();
    }
		else {
			// hide all elements that don't share ourClass
			$('#ourHolder').children('div:not(.' + ourClass + ')').hide();
			// show all elements that do share ourClass
			$('#ourHolder').children('div.' + ourClass).show();
		}
		return false;
	});
});
