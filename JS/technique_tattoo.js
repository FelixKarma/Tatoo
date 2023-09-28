class Techniques  {
    constructor(titre, image, description){
        this.titre = titre;
        this.image = image ;
        this.description = description ;
    }
}

let tattoo1 = new Techniques("Machine électrique", '/IMG/pages/technique_tattoo/LOGO_MACHINE_TATOUAGE_ELECTRIQUE.png', `C’est la méthode la plus répandue et la plus moderne. 
Elle consiste simplement à utiliser un dermographe électrique ou ce qu’on appelle un « machine gun ». 

Cet outil est fait de plein de petites aiguilles qui puisent leur encre dans une recharge.`):

let car1 = document.getElementById("image1");
car1.setAttribute("src", tattoo1.image);