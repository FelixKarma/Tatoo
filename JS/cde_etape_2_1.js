 
 let p = localStorage.getItem("login");
 if(p==1){
   document.location.assign('cde_etape_2_2_1.html');
 }
//  let logOut= document.getElementById('btnLogout');
//  // deconnecion du compte
//  logOut.addEventListener("click",()=>{
//      localStorage.setItem("login", 0);
//      document.location.assign('connexion.html');
//    })


 let btn = document.getElementById('btnConnect');
 let email = document.getElementById('email');
 let pass = document.getElementById('password');

 btn.addEventListener("click",()=>{
   if(email.value == 'aaaa@bbb.fr' && pass.value == 'admin'){
     localStorage.setItem("login", 1);
     document.location.assign('cde_etape_2_2_1.html');
   }else{
     let a = document.getElementById('alert');
     a.innerText = "Erreur dans le formulaire."; 
     a.classList.add("alert");
     a.classList.add("alert-danger");
     setTimeout(() => {
       a.classList.remove("alert");
       a.classList.remove("alert-danger");
       a.innerText ="";
     }, "1000");  
   }
 })
