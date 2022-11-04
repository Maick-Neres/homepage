const icon=document.getElementById("icon");
icon.addEventListener("click",()=>{
  const menu=document.querySelector("menu");
  if(menu.style.display=="block"){
    menu.style.display="none"
  }else{
    menu.style.display="block"

  }
})
