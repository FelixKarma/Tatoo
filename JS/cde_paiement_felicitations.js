// suppression du panier
localStorage.removeItem("produit1");
localStorage.removeItem("produit2");
localStorage.removeItem("produit3");

// modification de laffichage panier
let s = document.getElementById("qtePanier");
s.innerHTML = "" ;