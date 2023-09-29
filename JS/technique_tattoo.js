class Techniques  {
    constructor(titre, image, description){
        this.titre = titre;
        this.image = image ;
        this.description = description ;
    }
}

let tattoo1 = new Techniques("Machine électrique", '/IMG/pages/technique_tattoo/LOGO_MACHINE_TATOUAGE_ELECTRIQUE.png', `C’est la méthode la plus répandue et la plus moderne. 
Elle consiste simplement à utiliser un dermographe électrique ou ce qu’on appelle un « machine gun ». 
Cet outil est fait de plein de petites aiguilles qui puisent leur encre dans une recharge.`);


let tattoo2 = new Techniques("METHODE DU HANDPOKE TATTOO", "/IMG/pages/technique_tattoo/IMAGE HANDPOKE TATTOO .png", `La technique est un peu différente de celle qu'on utilise habituellement. À la différence d'une machine à tatouer, aucun procédé électronique n'est utilisé pour un tatouage handpoke. Il suffit d'appliquer l'encre sur le bout de votre aiguille et le travail peut commencer.`);

let tattoo3 = new Techniques("METHODE DU HENNE", '/IMG/pages/technique_tattoo/IMAGE TECHNIQUE HENNE.jpg', `Le henne prête à l'usage pour tatouage corporel temporaire. Henné naturel prêt à l'usage. Peinture corporelle temporaire, cône brun crème pour pochoir. Idéal pour réaliser vos plus beaux tatouages éphémères.`);




function tatooShow(a){
    let q = document.getElementById("btn"+a);
    q.addEventListener('click',function(){
        let img = document.getElementById("img_tech_tattoo");
        let titre = document.getElementById("titre");
        let p = document.getElementById("p");

         let m = "tattoo"+a ; 
         switch (a) {
            case 1:
            m= tattoo1;
            break;
            case 2:
            m= tattoo2;
            break;
            case 3:
            m= tattoo3;
             break;
            default:
            m= tattoo1;
            break;
         }
         console.log(m.image);
        // alert(m);
        img.setAttribute("src", m.image);
        titre.innerText =  m.titre ;
        p.innerText = m.description ;
     });
}


tatooShow(1);
tatooShow(2);
tatooShow(3);

