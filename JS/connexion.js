let btn = document.getElementById('btn_connect');
let email = document.getElementById('email');
let pass = document.getElementById('password');


 let p = localStorage.getItem("login");
 if(p==1){
   document.location.assign('mon_compte.html');
 }
btn.addEventListener("click",()=>{
  if(email.value == 'aaaa@bbb.fr' && pass.value == 'admin'){
    localStorage.setItem("login", 1);
    document.location.assign('mon_compte.html');
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
