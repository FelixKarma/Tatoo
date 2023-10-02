


function ajoutPanier(){
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
    let p1 =  parseInt(localStorage.getItem("produit1"));
    let p2 =  parseInt(localStorage.getItem("produit2"));
    let p3 =  parseInt(localStorage.getItem("produit3"));
    let qua = document.getElementById("qtePanier");
    // alert(p1);
     
     if(p1==null || isNaN(p1)){ p1=0;}
     if(p2==null || isNaN(p2)){p2=0;}
     if(p3==null || isNaN(p3)){p3=0;}
      console.log('p1'+p1+'p2'+p2+'p3'+p3);
    let j = p1+p2+p3;
    
    console.log(btn_menu);
    if (qua) {
        qua.innerHTML = j ;
    }
}
function checkConnect(){
    let p = localStorage.getItem("login");  
    let a = document.getElementById('login');
    let b = document.getElementById('div_login');
  if(p==1){
    a.style.display = 'none';
    b.style.display = 'block';
  }else{
    a.style.display = 'block';
    b.style.display = 'none';
  }
 }
ajoutPanier() ;
//checkConnect() ;
 

   




