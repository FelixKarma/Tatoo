class Produits {
  constructor(image, titre, price, description) {
    this.image = image;
    this.titre = titre;
    this.price = price;
    this.description = description;
  }
}

//Déclaration de la variable reponse
function showProd() {
  if (document.location.href.includes("detail_produit.html#")) {
    let prod1 = new Produits(
      "/IMG/pages/listing_produits/JAGUA.jpg",
      "CKit Jagua",
      "44,90€",
      "Kit Jagua (2 gels 15 ml + 10 pochoirs)"
    );
    let prod2 = new Produits(
      "/IMG/pages/listing_produits/packshotkit.png",
      "Sailor Kit",
      "29,90€",
      "Une planche avec ces 13 pochoirs vraiment minis à découper et une fiole d'encre pour tous les faire !"
    );
    let prod3 = new Produits(
      "/IMG/pages/listing_produits/Henne-main-en-tube-brun-30g-Hasmi.png",
      "Henné pour main",
      "1,90€",
      "Henné main en tube brun 30g – Hasmi "
    );

    let produits = ["produit1", "produit2", "produit3"];
    // Récupération du mot recherché grace à l'id "nom" qu'on stockera dans une variable du meme nom
    let t = document.getElementById("titre");
    let i = document.getElementById("image");
    let p = document.getElementById("price");
    let d = document.getElementById("description");
    //boucler sur les recettes
    for (let produit of produits) {
      if (document.location.href.includes(produit)) {
        switch (produit) {
          case "produit1":
            t.innerText = prod1.titre;
            i.setAttribute("src", prod1.image);
            p.innerText = prod1.price;
            d.innerText = prod1.description;
            return true;
          break;

          case "produit2":
            t.innerText = prod2.titre;
            i.setAttribute("src", prod2.image);
            p.innerText = prod2.price;
            d.innerText = prod2.description;
            return true;
            break;

          case "produit3":
            t.innerText = prod3.titre;
            i.setAttribute("src", prod3.image);
            p.innerText = prod3.price;
            d.innerText = prod3.description;
            return true;
            break;
        }
      } 
      
    }
    return false ;
  } 
}
if(!showProd()){
    document.location.assign("404.html");
}

let qte = document.getElementById("qte");
let up = document.getElementById("up");
let down = document.getElementById("down");
up.addEventListener('click',function(){
    let q  =parseInt(qte.innerText);
     qte.innerText = q + 1;   
});


down.addEventListener('click',function(){
   if(qte.innerText > 0){
     qte.innerText = qte.innerText - 1;
   }
});
let ap = document.getElementById('qtePanier');
let quantite = document.getElementById("qte");
let addCart = document.getElementById("imgAddCart");


function functAddCart(g){

  addCart.addEventListener('click',function(){
    // ajouter qte dans affichage panier
    if(document.location.href.includes('produit'+g)){
     if(localStorage.getItem('produit'+g)==null){
       let s = quantite.innerText;
       ap.innerText= s ;
       localStorage.setItem('produit'+g,s);
       ajoutPanier();
     }
      else{
        let q = parseInt(localStorage.getItem('produit'+g));
        let d =  ap.innerText ;
        let n = parseInt(q);
        let m = parseInt(d);
        let s = parseInt(quantite.innerText);

        ap.innerText =  s+ m ;
        
        
        localStorage.setItem('produit'+g, q+s);
        ajoutPanier();
      }
     
    }
 });
}

functAddCart(1);
functAddCart(2);
functAddCart(3);
// addCart.addEventListener('click',function(){
//    // ajouter qte dans affichage panier
//    if(document.location.href.includes('produit1')){
//     if(localStorage.getItem("panier1")==null){
//       let s = quantite.innerText;
//       ap.innerText= s ;
//       localStorage.setItem("panier1",s);
//     }
//      else{
//        let q = parseInt(localStorage.getItem("panier1"));
//        let d =  ap.innerText ;
//        let n = parseInt(q);
//        let m = parseInt(d);
//        ap.innerText = n + m ;

//        let f = ap.innerText ;
//        localStorage.setItem("panier1", f);
//      }
    
//    }
   
 
// });


