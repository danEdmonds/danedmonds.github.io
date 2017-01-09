jQuery(document).ready(function($){
	var itemInfoWrapper = $('.cd-single-item');

	itemInfoWrapper.each(function(){
		var container = $(this),
			// create slider pagination
			sliderPagination = createSliderPagination(container);

		//update slider navigation visibility
		updateNavigation(container, container.find('.cd-slider li').eq(0));

        //update visible slide
        // container.find('.cd-next').on('click', function(){
        $('.js-next').on('click', function() {
            nextSlide(container, sliderPagination);
        });

        // container.find('.cd-prev').on('click', function(){
        $('.js-prev').on('click', function() {
            prevSlide(container, sliderPagination);
        });

		// container.find('.cd-slider').on('click', function(event){
		// 	//enlarge slider images
		// 	if( !container.hasClass('cd-slider-active') && $(event.target).is('.cd-slider')) {
		// 		itemInfoWrapper.removeClass('cd-slider-active');
		// 		container.addClass('cd-slider-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
		// 			$('body,html').animate({'scrollTop':container.offset().top}, 200);
		// 		});
		// 	}
		// });

		sliderPagination.on('click', function(){
			var selectedDot = $(this);
			if(!selectedDot.hasClass('selected')) {
				var selectedPosition = selectedDot.index(),
					activePosition = container.find('.cd-slider .selected').index();
				if( activePosition < selectedPosition) {
					nextSlide(container, sliderPagination, selectedPosition);
				} else {
					prevSlide(container, sliderPagination, selectedPosition);
				}
			}
		});
	});

	//keyboard slider navigation
	// $(document).keyup(function(event){
	// 	if(event.which=='37' && $('.cd-slider-active').length > 0 && !$('.cd-slider-active .cd-slider .selected').is(':first-child')) {
	// 		prevSlide($('.cd-slider-active'), $('.cd-slider-active').find('.cd-slider-pagination li'));
	// 	} else if( event.which=='39' && $('.cd-slider-active').length && !$('.cd-slider-active .cd-slider .selected').is(':last-child')) {
	// 		nextSlide($('.cd-slider-active'), $('.cd-slider-active').find('.cd-slider-pagination li'));
	// 	} else if(event.which=='27') {
	// 		itemInfoWrapper.removeClass('cd-slider-active');
	// 	}
	// });

	function createSliderPagination($container){
		var wrapper = $('<ul class="cd-slider-pagination"></ul>').insertAfter($container.find('.cd-slider-navigation'));
		$container.find('.cd-slider li').each(function(index){
			var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
				dot = $('<a href="#0"></a>').appendTo(dotWrapper);
			dotWrapper.appendTo(wrapper);
			dot.text(index+1);
		});
		return wrapper.children('li');
	}

	function nextSlide($container, $pagination, $n){
		var visibleSlide = $container.find('.cd-slider .selected'),
			navigationDot = $container.find('.cd-slider-pagination .selected');
		if(typeof $n === 'undefined') $n = visibleSlide.index() + 1;
		visibleSlide.removeClass('selected');
		$container.find('.cd-slider li').eq($n).addClass('selected').prevAll().addClass('move-left');
		navigationDot.removeClass('selected')
		$pagination.eq($n).addClass('selected');
		updateNavigation($container, $container.find('.cd-slider li').eq($n));
	}

	function prevSlide($container, $pagination, $n){
		var visibleSlide = $container.find('.cd-slider .selected'),
			navigationDot = $container.find('.cd-slider-pagination .selected');
		if(typeof $n === 'undefined') $n = visibleSlide.index() - 1;
		visibleSlide.removeClass('selected')
		$container.find('.cd-slider li').eq($n).addClass('selected').removeClass('move-left').nextAll().removeClass('move-left');
		navigationDot.removeClass('selected');
		$pagination.eq($n).addClass('selected');
		updateNavigation($container, $container.find('.cd-slider li').eq($n));
	}

	function updateNavigation($container, $active) {
		// $('.js-prev').toggleClass('inactive', $active.is(':first-child'));
		// $('.js-next').toggleClass('inactive', $active.is(':last-child'));

        if ($active.is(':first-child')) {
            $('.js-prev').attr('disabled', true).addClass('inactive');
        } else {
            $('.js-prev').removeAttr('disabled').removeClass('inactive');
        }

        if ($active.is(':last-child')) {
            $('.js-next').attr('disabled', true).addClass('inactive');
        } else {
            $('.js-next').removeAttr('disabled').removeClass('inactive');
        }
	}




    var navigationContainer = $('#cd-nav'),
		mainNavigation = navigationContainer.find('#cd-main-nav');

	//open or close the menu clicking on the bottom "menu" link
	$('.cd-primary-nav-trigger').on('click', function(){
		$(this).toggleClass('menu-is-open');
		//we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
		mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');
	});
});
