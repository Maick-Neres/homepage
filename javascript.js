const icon=document.getElementById("icon");
const icon2=document.getElementById("icon2");
icon.addEventListener("click",()=>{
  const menu=document.getElementById("menu");
  if(menu.style.display=="block"){
    menu.style.display="none"
  }else{
    menu.style.display="block"
    icon.style.display="none"
    icon2.style.display="block"
   
  }
})


icon2.addEventListener("click",()=>{
  const menu=document.getElementById("menu");
    if(menu.style.display=="block"){
      menu.style.display="none"
      icon.style.display="block"
      icon2.style.display="none"

    }
})

function size() {
  const menu=document.getElementById("menu");
    if(window.innerWidth>=768){
      menu.style.display="block"
      icon.style.display="none"
      icon2.style.display="none"
    }else{
      menu.style.display="none"
      icon.style.display="block"

  
    }
}