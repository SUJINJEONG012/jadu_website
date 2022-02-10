'use strict';



// 모바일 드롭다운 메뉴
$(document).ready(function  () {
	$(".location-inner > ul > li > a").click(function  () {
		$(this).siblings().slideToggle();
		return false;
	});
	$(".location-inner > ul > li").on("mouseleave",function  () {
		$(this).find(".location-2dep").hide();
	});
});


// 탭메뉴
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    console.log(target);
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    });
    tabs.forEach(tab => {
      tab.classList.remove('active')
    });
    target.classList.add('active')
    tab.classList.add('active')
  })
})