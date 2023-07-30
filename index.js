  for(var i=0  ; i<document.querySelectorAll(".drum").length ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function( ){
        var n =this.innerHTML;
        kk(n);
        ani(n);
       
    });
  }


  document.addEventListener("keypress",function(o){
    kk(o.key);
    ani(o.key)
  });
  function kk(n){
    switch (n) {
        case 'w':
            var p=new Audio("./crash.mp3");
            p.play();
            break;

            case 'a':
            var p=new Audio("./kick-bass.mp3");
            p.play();
            break;

            case 's':
            var p=new Audio("./snare.mp3");
            p.play();
            break;


            case 'd':
            var p=new Audio("./tom-1.mp3");
            p.play();
            break;


            case 'j':
            var p=new Audio("./tom-2.mp3");
            p.play();
            break;

            case 'k':
            var p=new Audio("./tom-3.mp3");
            p.play();
            break;


            case 'l':
            var p=new Audio("./tom-4.mp3");
            p.play();
            break;
    
        default:
            alert("no match");
            break;
    }
 
  }
function ani(m){
var ans=document.querySelector("."+m);
ans.classList.add("pressed");
setTimeout(function()  {
    ans.classList.remove("pressed");
    
},  2000);//1000=1s.
}