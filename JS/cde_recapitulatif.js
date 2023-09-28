let po1 = localStorage.getItem("produit1");
let po2 = localStorage.getItem("produit2");
let po3 = localStorage.getItem("produit3");

let show1 = document.getElementById("produit1");
let show2 = document.getElementById("produit2");
let show3 = document.getElementById("produit3");

if (po1 == null && po2 == null && po3 == null) {
  document.location.assign("404.html");
} else {
  console.log(po1);
  console.log(po2);
  if (po1 != null) {
    // afficher produit
    show1.style.display = "block";
  }
  // || !isNaN(po2)
  if (po2 != null) {
    // afficher produit
    show2.style.display = "block";
  }
  if (po3 != null) {
    // afficher produit
    show3.style.display = "block";
  }
}


function azerty(g){
  let p = localStorage.getItem("produit"+g);
  let t = document.getElementById("quantite"+g);
  t.innerText = p ;

  let d = document.getElementById("down"+g);
  let u = document.getElementById("up"+g);
  let s = document.getElementById("produit"+g);
  let qte = parseInt(p);



  d.addEventListener("click", function () {
    if (qte >0) {
        qte--;
        t.innerText = qte;
        localStorage.setItem("produit"+g, qte);
        figureOut();
        if (qte == 0) {
          s.style.display = "none";
          localStorage.removeItem("produit"+g);
          document.location.reload();
        }
        //modification du nbre article panier
        ajoutPanier();

     }else {
    // suppression du produit
    localStorage.removeItem("produit"+g);
    s.style.display = "none"; 
    }   
});

u.addEventListener("click", function () {
  if (qte > 0) {
    qte++;
    
    t.innerText = qte;
    localStorage.setItem("produit"+g, qte);
    figureOut();
     //modification du nbre article panier
     ajoutPanier();
  }
  
});  
}
figureOut();
azerty(1);
azerty(2);
azerty(3);
function figureOut(){
  let po1 = localStorage.getItem("produit1");
  let po2 = localStorage.getItem("produit2");
  let po3 = localStorage.getItem("produit3");

   let total1 = po1*44.90;
   let total2 = po2*29.90; 
   let total3 = po3*1.90;
   let total =  document.getElementById("total");
   let w = total1 +total2+total3 ;
   let y = w.toFixed(2);
  total.innerText = y+"€"; 
}

