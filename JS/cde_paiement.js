function figureOut(){
    let po1 = localStorage.getItem("produit1");
    let po2 = localStorage.getItem("produit2");
    let po3 = localStorage.getItem("produit3");
  
     let total1 = po1*44.90;
     let total2 = po2*29.90; 
     let total3 = po3*1.90;
     let total =  document.getElementById("totalPaiement");
     let w = total1 +total2+total3 ;
     let y = w.toFixed(2);
    total.value= y+" €"; 
  }
  figureOut();