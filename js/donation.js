'use strict';




$(document).ready(function  () {
	$(".location-inner > ul > li > a").click(function  () {
		$(this).siblings().slideToggle();
		return false;
	});
	$(".location-inner > ul > li").on("mouseleave",function  () {
		$(this).find(".location-2dep").hide();
	});
});

