

let po1 =  localStorage.getItem("produit1");
let po2 =  localStorage.getItem("produit2");
let po3 =  localStorage.getItem("produit3");

let show1= document.getElementById('produit1');
let show2= document.getElementById('produit2');
let show3= document.getElementById('produit3');


 if(po1==null && po2==null && po3==null){
    document.location.assign('404.html');

 }else{
    console.log(po1);
     console.log(po2);
    if(po1!=null ){ 
        // afficher produit
        
        show1.style.display= 'block';
    }
    // || !isNaN(po2)
    if(po2!=null ){ 
        // afficher produit
        
        show2.style.display= 'block';
    }
    if(po3!=null ){ 
        // afficher produit
        
        show3.style.display= 'block';
    }
 }

 let down1 = document.getElementById('down1');
 let up1 =  document.getElementById('up1');
 let totalProd1 =  document.getElementById('quantite1');

 let quantite1 = parseInt(po1) ;
 totalProd1.innerText = po1 ;



 down1.addEventListener('click',function(){

    if(quantite1>0){
       quantite1--; 
       if(quantite2==0){
        localStorage.removeItem('produit1');
        show1.style.display= 'none';
       }
       totalProd1.innerText = quantite1 ;
       localStorage.setItem('produit1', quantite1);
    }else{
        // suppression du produit
        localStorage.removeItem('produit1');
        show1.style.display= 'none';
    }
    
 });

up1.addEventListener('click',function(){
    if(quantite1>0){
       quantite1++; 
       totalProd1.innerText = quantite1 ;
       localStorage.setItem('produit1', quantite1);
    }
   
 })

//  dscsdcscsdc
// sqxqscx
// qscqc
// qcsqcs
let down2 = document.getElementById('down2');
 let up2 =  document.getElementById('up2');
 let totalProd2 =  document.getElementById('quantite2');

 let quantite2 = parseInt(po2) ;
 totalProd2.innerText = po2 ;
 down2.addEventListener('click',function(){
    if(quantite2>0){
       quantite2--; 
       if(quantite2==0){
        localStorage.removeItem('produit2');
        show2.style.display= 'none';
       }
       totalProd2.innerText = quantite2 ;
       localStorage.setItem('produit2', quantite2);
    }else{
        // suppression du produit
        localStorage.removeItem('produit2');
        show2.style.display= 'none';
    }
    
 });

up2.addEventListener('click',function(){
    if(quantite2>0){
       quantite2++; 
       totalProd2.innerText = quantite2 ;
       localStorage.setItem('produit2', quantite2);
    }
   
 })

 





 //  dscsdcscsdc
// sqxqscx
// qscqc
// qcsqcs
let down3 = document.getElementById('down3');
let up3 =  document.getElementById('up3');
let totalProd3 =  document.getElementById('quantite3');

let quantite3 = parseInt(po3) ;
totalProd3.innerText = po3 ;
down3.addEventListener('click',function(){
   if(quantite3>0){
      quantite3--; 
      if(quantite3==0){
        localStorage.removeItem('produit3');
        show3.style.display= 'none';
       }
      totalProd3.innerText = quantite3 ;
      localStorage.setItem('produit3', quantite3);
   }else{
       // suppression du produit
       localStorage.removeItem('produit3');
       show3.style.display= 'none';
   }
   
});

up3.addEventListener('click',function(){
   if(quantite3>0){
      quantite3++; 
      totalProd3.innerText = quantite3 ;
      localStorage.setItem('produit3', quantite3);
   }
  
})

