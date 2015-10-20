$(document).ready(function() {
  function filterPath(string) {
  return string
	.replace(/^\//,'')
	.replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	.replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('a[href*=#]').each(function() {
	var thisPath = filterPath(this.pathname) || locationPath;
	if (  locationPath == thisPath
	&& (location.hostname == this.hostname || !this.hostname)
	&& this.hash.replace(/#/,'') ) {
	  var $target = $(this.hash), target = this.hash;
	  if (target) {
		var targetOffset = $target.offset().top;
		$(this).click(function(event) {
		  event.preventDefault();
		  $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
			location.hash = target;
		  });
		});
	  }
	}
  });

  // use the first element that is "scrollable"
  function scrollableElement(els) {
	for (var i = 0, argLength = arguments.length; i <argLength; i++) {
	  var el = arguments[i],
		  $scrollElement = $(el);
	  if ($scrollElement.scrollTop()> 0) {
		return el;
	  } else {
		$scrollElement.scrollTop(1);
		var isScrollable = $scrollElement.scrollTop()> 0;
		$scrollElement.scrollTop(0);
		if (isScrollable) {
		  return el;
		}
	  }
	}
	return [];
  }
  

			$.scrollUp({
				scrollName: 'scrollUp',
				topDistance: '300', // Distance from top before showing element (px)
				topSpeed: 300, // Speed back to top (ms)
				animation: 'fade', // Fade, slide, none
				animationInSpeed: 200, // Animation in speed (ms)
				animationOutSpeed: 200, // Animation out speed (ms)
				scrollText: 'Scroll to top', // Text for element
				scrollImg: false,
				activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
			});

});