let p = localStorage.getItem("login");
if(p==1){
  document.location.assign('cde_etape_2_2_1.html');
}
function verif(id,id_error, empty, error_regex, the_regex ){
    let r = document.getElementById(id);	
    r.addEventListener("blur", function () {

         reponse = ck_champ_jquery(id,id_error,empty,error_regex,the_regex);
         if(reponse ==1 ){
             let a = document.getElementById(id);
            a.focus();
         }else{
             let a = document.getElementById(id_error);
             a.innerHTML= '';
         }
         return false ;
    });
}
    verif('password','passerror', false , 'le champ doit etre rempli','il y a une erreur dans ce que vous avez rempli','^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$');
