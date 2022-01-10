'use strict';
const menus = document.querySelectorAll('li');
const contents = document.querySelectorAll('.content');

window.onload = function() {
    for (let i = 0; i < menus.length; i++) {
        menus[i].setAttribute("onclick", "elemRemove(" + i + ")")
    }
}

function elemRemove(menuNum) {
    for (let i = 0; i < menus.length; i++) {
        if (i === menuNum) {
            window.scroll({ top: contents[i].offsetTop, behavior: 'smooth' });
            document.getElementById("menu" + (i + 1)).classList.add("active");
        } else {
            document.getElementById("menu" + (i + 1)).classList.remove("active");
        }
    }
}





//부드럽게 내려오는 

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';

        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';

        }
    })
}

window.addEventListener('scroll', handleScroll);





// header


// 사이트맵 열고닫기
const html = document.querySelector('html');
const header = html.querySelector('.header');
const btnSitemap = html.querySelector('.navBtntoggle');
const sitemap = html.querySelector('.nav-mobile');

btnSitemap.addEventListener('click', () => {
    html.classList.toggle('active'); // overflow: hidden;
    btnSitemap.classList.toggle('active');
    sitemap.classList.toggle('active');
});

// 스크롤에 따른 헤더변화
const headerWrap = html.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    let scrollValue = html.scrollTop;

    if (scrollValue > 80) {
        if (scrollValue > lastScroll) {
            headerWrap.classList.add('fix');
            headerWrap.style.top = '0';
        } else {
            headerWrap.style.top = '-80px';
        }
    } else {
        headerWrap.classList.remove('fix');
        headerWrap.style.top = '0';
    }

    lastScroll = scrollValue;
});