function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
function showCommentRandom() {  
    let rand = getRandomArbitrary(0, tabs.length-1);
    let comment = document.getElementById('comment');
    let note = document.getElementById('note');
    let notetabs=tabs[rand][0];
    let commenttabs=tabs[rand].slice(2,tabs[rand].length);
    console.log(tabs[rand].length);

    comment.innerText = commenttabs;
    note.innerText = notetabs+'/5';
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
    }
  })
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
