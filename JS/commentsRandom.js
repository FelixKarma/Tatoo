function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function showCommentRandom() {  
    let rand       = getRandomArbitrary(0, tabs.length-1);
    let comment    = document.getElementById('comment');
    let note       = document.getElementById('note');
    let notetabs   =tabs[rand][0];
    let commenttabs=tabs[rand].slice(2,tabs[rand].length);
    comment.innerText = commenttabs;
    note.innerText = notetabs+'/5';
    avertageComments();
}
avertageComments()
function avertageComments(){
  let ar= [] ;
  let notes  = 0;
  let nbre ;
  let d = 0;
  for(let i =0;i<localStorage.length;i++){
    if (localStorage.getItem('comment'+i)!=null) {
        ar.push( localStorage.getItem('comment'+i));
        notes += parseInt(ar[i][0]);
    }
    d = i ;
  } 
  let q ;
 
  nbre = d;

  q = notes /nbre ;
  q = q.toFixed(2);
  let show = document.getElementById("average");
  show.innerText = 'note moyenne '+q ;
}
  let star1 = document.getElementById('star1');
  let star2 = document.getElementById('star2');
  let star3 = document.getElementById('star3');
  let star4 = document.getElementById('star4');
  let star5 = document.getElementById('star5');
   //fonction ok
  function addCo(etoile){
    
    let btnComment = document.getElementById('btn_comment');
    btnComment.addEventListener("click",function(){
    let text  = document.getElementById('user-text');
    let val = text.value;
    if(val.length > 0){
      let i = 0;
      let check = localStorage.getItem('comment'+i);
      while(check!= null){
        i++ ;
        check = localStorage.getItem('comment'+i);
      }

      let array = [etoile,val];
      localStorage.setItem("comment"+i,array);
      tabs.push(array);
      text.value = '' ;
      addElement();
      avertageComments();
      
     
    }
  })
  }
  function addElement() {
   var newDiv = document.createElement("div");
    newDiv.className = "alert alert-success";
  newDiv.innerText = "Commentaire envoyer!";
  var currentDiv = document.getElementById("Comment");
    currentDiv.appendChild(newDiv);
     setTimeout(() => {
       newDiv.classList.add("d-none");
     }, "3000");
  }
    star1.addEventListener("click",function(){
     addCo(1);
    })
    star2.addEventListener("click",function(){
      addCo(2);
    })
    star3.addEventListener("click",function(){
      addCo(3);
    })
    star4.addEventListener("click",function(){
      addCo(4);
    })
    star5.addEventListener("click",function(){
      addCo(5);
    })
    
    let tabs = [];
    for(let i =0;i<localStorage.length;i++){
      if (localStorage.getItem('comment'+i)!=null) {
          tabs.push(localStorage.getItem('comment'+i));
      }
    }
 

  showCommentRandom();
  setInterval(function(){
    showCommentRandom();
  }, 3000) ;
