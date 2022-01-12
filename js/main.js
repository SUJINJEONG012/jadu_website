'use strict';


const menus = document.querySelectorAll('li.menus');
const sections = document.querySelectorAll('.section');

//사이트맵 열고닫기 상수 지정
const html = document.querySelector('html');
const header = html.querySelector('.header');
const btnSitemap = html.querySelector('.nav-icon');
const sitemap = html.querySelector('.nav-mobile');


//toggle 클릭했을 경우 열고 닫히는 이벤트 함수 
function toggleClick(){
  header.classList.toggle('active'); // overflow: hidden;
  btnSitemap.classList.toggle('active');
  sitemap.classList.toggle('active');
}

//함수실행
	btnSitemap.addEventListener('click', () => {
   toggleClick();
	});



window.onload = function(){
  for(let i =0; i<menus.length; i++){
    menus[i].setAttribute("onclick","elemRemove("+i+")")
  }
}

function elemRemove(menuNum){
  for(let i=0 ; i<menus.length; i++){
    if(i === menuNum % 6){
      window.scroll({top:sections[i].offsetTop, behavior:'smooth'});
      document.getElementById("menu"+(i+1)).classList.add('active');
       
      if (matchMedia("screen and (max-width: 1023px)").matches) { 
        toggleClick();    
      } 
      
    }else{
      document.getElementById("menu"+(i+1)).classList.remove('active');
    }
  }
}
// 함수호출 toggleClick(); 를 함수로 만든 후, 햄버게메뉴 클릭시 열고/닫히는 이벤트와
// 모바일 메뉴클릭시 콘텐츠로 변경될때 햄버거메뉴가 닫히는 이벤트랑 동일 한번에 함수로 만듦  


//부드럽게 내려오는 

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

  



	// 브릭스란 ? 슬라이드
	const slideList = document.querySelector('ul.slide_list');
	const slideBlock = document.querySelectorAll('.slide_block');
	const slideLen = slideBlock.length; // li 길이
	const slideBlockWidth = 100 / (slideLen + 1); // li 너비 계산
	const btnSlide = document.querySelectorAll('.btn_slide');
	
    let curIndex = 0;
	let curBtn = btnSlide[curIndex];
	curBtn.classList.add('active');

	slideList.style.width = `${100 * (slideLen + 1)}%`; // ul 너비 지정
	slideBlock.forEach((element) => {
		element.style.width = `${slideBlockWidth}%`;
	}); // li 너비 지정

	// 마지막 슬라이드 뒤에 첫번째 슬라이드 붙이기
	const slideBlockFirst = slideList.firstElementChild.cloneNode(true);
	slideList.appendChild(slideBlockFirst);

	// 페이지 로드되면 자동재생
	let setting; // clear를 위한 전역함수 선언

	function autoPlay() {
		setting = setInterval(() => {
			slideList.style.transition = '.5s';
			slideList.style.transform = `translateX(-${slideBlockWidth * (curIndex + 1)}%`;
			
			curBtn.classList.remove('active');
			curBtn = btnSlide[++curIndex];				
			
			if(curIndex === slideLen) {
				setTimeout(() => {
					slideList.style.transition = '0s';
					slideList.style.transform = 'translateX(0)';
				}, 501);
				curIndex = 0;
				curBtn = btnSlide[0];
			};

			curBtn.classList.add('active');
		}, 5000);
	};

	document.addEventListener("DOMContentLoaded", () => {
		autoPlay();
	});

	// 자동재생 정지 & 다시재생
	const btnAutoPause = document.querySelector('.btn_auto.pause');
	const btnAutoPlay = document.querySelector('.btn_auto.play');

	btnAutoPause.addEventListener('click', () => {
		btnAutoPause.style.display = 'none';
		btnAutoPlay.style.display = 'block';
		clearInterval(setting);
	});

	btnAutoPlay.addEventListener('click', () => {
		btnAutoPause.style.display = 'block';
		btnAutoPlay.style.display = 'none';
		autoPlay();
	});

	// 버튼 클릭시 슬라이드 이동
	for (let i = 0; i < slideLen; i++){
		btnSlide[i].onclick = () => {
			if ( btnAutoPlay.style.display === 'block' ) {
				slideList.style.transition = '.5s';
				slideList.style.transform = `translateX(-${slideBlockWidth * i}%`; // 클릭한 슬라이드로 이동
			
				clearInterval(setting); // 자동재생 중지

				for (let i = 0; i < slideLen; i++) {
					btnSlide[i].classList.remove('active');
				}; // active 전체 제거

				btnSlide[i].classList.add('active'); // 클릭한 곳 active 추가

				curIndex = i; // 흐름이 이어지도록 curIndex 설정
			} // 자동재생이 멈춰있을 경우

			else {
				slideList.style.transition = '.5s';
				slideList.style.transform = `translateX(-${slideBlockWidth * i}%`; // 클릭한 슬라이드로 이동
				
				clearInterval(setting); // 자동재생 중지
				curBtn.classList.remove('active'); // 자동재생되던 곳 active 제거
				btnSlide[i].classList.add('active'); // 클릭한 곳 active 추가
				
				curIndex = i; // 흐름이 이어지도록 curIndex 설정
				
				setTimeout(() => {
					btnSlide[i].classList.remove('active'); 
				},5000); // 3초 뒤 클릭한 곳 active 제거
				
				autoPlay(); // 자동재생 다시 실행
			} // 자동재생이 실행중일 경우	
		}
	};

