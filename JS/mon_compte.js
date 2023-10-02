let p = localStorage.getItem("login");
 if(p==0){
    document.location.assign('connexion.html');
 }
 let logOut= document.getElementById('btnLogout');
// deconnecion du compte
logOut.addEventListener("click",()=>{

    localStorage.setItem("login", 0);
    document.location.assign('connexion.html');
  })
  
