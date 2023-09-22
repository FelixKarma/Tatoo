
let btn_menu = document.getElementById("btn_menu");
let menu = document.getElementById("menu");
btn_menu.addEventListener("click", function() {
    
    if (menu.style.display === "none") {
        menu.style.display = "flex";
        for(let i = 0; i<300;i++){
            menu.style.height = i+"px";
        } 
      } else {
       menu.style.display = "none";
      }
});




