
function menuClient(){
  let btn_menu1 = document.getElementById("btn_menu_client");
  let menu1 = document.getElementById("menuClient");
  btn_menu1.addEventListener("click", function() {   
      if (menu1.style.display === "none") {
          menu1.style.display = "flex";
          for(let i = 0; i<300;i++){
              menu1.style.height = i+"px";
          } 
        } else {
         menu1.style.display = "none";
        }
  });
}
function menu(){
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
}
function ajoutPanier(){
    let p1 =  parseInt(localStorage.getItem("produit1"));
    let p2 =  parseInt(localStorage.getItem("produit2"));
    let p3 =  parseInt(localStorage.getItem("produit3"));
    let qua = document.getElementById("qtePanier");
    
     if(p1==null || isNaN(p1)){ p1=0;}
     if(p2==null || isNaN(p2)){p2=0;}
     if(p3==null || isNaN(p3)){p3=0;}
    let j = p1+p2+p3;  
    if (qua) {
        qua.innerHTML = j ;
    }
}
function checkConnect(){
    let p = localStorage.getItem("login");  
    let b = document.getElementById('div_login');
    let c = document.getElementById('div_logout');
   if(p==1){
     c.style.display = 'none';
     b.style.display = 'flex';
   }else{
     c.style.display = 'flex';
     b.style.display = 'none';
   }
 }
 menu();
 menuClient()
ajoutPanier() ;
checkConnect() ;

  // let p = localStorage.getItem("login");
  //  if(p==0){
  //     document.location.assign('connexion.html');
  //  }
 let logOut= document.getElementById('btnLogout');
// deconnecion du compte
logOut.addEventListener("click",()=>{
    localStorage.setItem("login", 0);
    document.location.assign('connexion.html');
  })
 

   




