// function ck_champ_jquery(id,idError,is_empty,is_not_regex,regex){
//     reponse = 0;
//     champ =document.getElementById(id);
//     //si non null
//     if(champ != ''){
//         if(!(champ.match(regex))){
//             reponse =1;	
//             let a = document.getElementById(idError);
//             a.innerHTML ="<p class='error'>"+is_not_regex +'</p>' ;
//         }
//     }else{
//         let a = document.getElementById(idError);
//             a.innerHTML  =  "<p class='error'>"+is_empty+'</p>'  ;  
//         reponse =1 ;
//     }
//     return reponse ;
// }
// function trim(val , myString){
// return myString.replace('/^'+val+'+/g','').replace('/'+val+'+$/g','') ;
// }
function verif(id,id_error, empty, error_regex, the_regex ){
    let r = document.getElementById(id);	
    r.addEventListener("blur", function () {

         reponse = ck_champ_jquery(id,id_error,empty,error_regex,the_regex);
         alert(" reponse"+reponse);
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
