let tabmenu = document.getElementById("tabmenu");
let con = document.getElementsByClassName("wrap_inner");
tabmenu.addEventListener("change",function(){
  let val = tabmenu.options[tabmenu.selectedIndex].value;
  for (let i = 0; i<tabmenu.length; i++){
    con[i].style.display = "none";
      if(val == i) {
        con[i].style.display = "block";
      } else if (val == "x"){
        con[0].style.display = "block";
        document.getElementById("tab1").selected = true;
      }
  }
});