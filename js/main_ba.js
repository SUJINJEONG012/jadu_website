const menus = document.querySelectorAll('li');
<<<<<<< HEAD
const contents = document.querySelectorAll('.content');
const firstTop = contents[0].offsetTop;
const secondTop = contents[1].offsetTop;
const thirdTop = contents[2].offsetTop;
const fourTop = contents[3].offsetTop;
const fifthTop = contents[4].offsetTop;

menus[0].onclick = function(){
    window.scroll({top:firstTop, behavior:'smooth'});
    document.getElementsByClassName("menu-tit").classList.add("active");
}

menus[1].onclick = function(){
    window.scroll({top:secondTop, behavior:'smooth'});
    
    const onclick = document.getElementsByClassName('menu-tit');
    d
    document.getElementsByClassName("menu-tit").classList.add("active");
}

menus[2].onclick = function(){
    window.scroll({top:thirdTop, behavior:'smooth'});
   
    
}

menus[3].onclick = function(){
    window.scroll({top:fourTop, behavior:'smooth'});
}

menus[4].onclick = function(){
  window.scroll({top:fifthTop, behavior:'smooth'});
=======
const contents = document.querySelectorAll('.contents');

//사이트맵 열고닫기 상수 지정
const html = document.querySelector('html');
const header = html.querySelector('.header');
const btnSitemap = html.querySelector('.navBtntoggle');
const sitemap = html.querySelector('.nav-mobile');


//toggle 클릭했을 경우 열고 닫히는 이벤트 함수 
function toggleClick(){
  html.classList.toggle('active'); // overflow: hidden;
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
    if(i === menuNum % 5){
      window.scroll({top:contents[i].offsetTop, behavior:'smooth'});
      document.getElementById("menu"+(i+1)).classList.add('active');
       
      if (matchMedia("screen and (max-width: 1024px)").matches) { 
        toggleClick();    
      } 
      
    }else{
      document.getElementById("menu"+(i+1)).classList.remove('active');
    }
  }
>>>>>>> b3cf4cc97b15ab8a3ec0374b23335ec746086072
}

// 함수호출 toggleClick(); 를 함수로 만든 후, 햄버게메뉴 클릭시 열고/닫히는 이벤트와
// 모바일 메뉴클릭시 콘텐츠로 변경될때 햄버거메뉴가 닫히는 이벤트랑 동일 한번에 함수로 만듦  



<<<<<<< HEAD


=======
//부드럽게 내려오는 
>>>>>>> b3cf4cc97b15ab8a3ec0374b23335ec746086072

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






	