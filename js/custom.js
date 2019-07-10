
$(document).ready(function() {
	'use strict';

	/*--------------------------------------------
	Comments
	--------------------------------------------*/


	$('.box').on('click', function() {
		if(($(this).hasClass('active')) != true) {
			$('.box').css({
				'order': '2',
				'height': '200px',
				'width': '150px'
			}).removeClass('active');
			$(this).css({'order': '1'}).addClass('active');
			$('.box.active').animate({
				'height': '400px',
				'width': '250px'
			});
		}
	})




})