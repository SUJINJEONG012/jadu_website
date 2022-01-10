const menus = document.querySelectorAll('li');
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
}







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