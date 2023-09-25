function affichageProduit(){
    let arrayProds = ['prod1',"prod2","prod3"];
    let elem1 = document.getElementById(arrayProds[0]);
    let elem2 = document.getElementById(arrayProds[1]);
    let elem3 = document.getElementById(arrayProds[2]);
    elem1.addEventListener("click", function (event) {
        let selection = arrayProds[0];
        document.location.assign(`detail_produit.html#${selection}`);
        
    });
    elem2.addEventListener('click',function(){
        let selction = arrayProds[1] ;
        document.location.assign(`detail_produit.html#${selction}`);
    });
    elem3.addEventListener('click',function(){
        let selction = arrayProds[2] ;
         document.location.assign(`detail_produit.html#${selction}`);
    });
    

}
document.addEventListener("DOMContentLoaded", (event) => {
    // affichageProduit();
});




