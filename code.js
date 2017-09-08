//if click on start/reset

var startreset = document.getElementById('startreset');

var countdown = document.getElementById('timevalue');

var gameover = document.getElementById('gameover');

var question = document.getElementById('question');

var correctanswer = document.getElementById('correct');

var wronganswer = document.getElementById('wrong');

var score = document.getElementById('scorevalue');

var scoreno = 0;

var box = document.getElementsByClassName('box');

var number1 = Math.floor(1+Math.random()*10);
var number2 = Math.floor(1+Math.random()*10);

var product;

countdown.innerHTML = "30";

var timeremain = document.getElementById('timeremaining');

var btn;

var b = startreset.innerHTML;

var x = 30;

var i = 0; //for indexing

var g = 0; 

var answer;

var correct;
       
    startreset.onclick = function (){

         obj = {
             
             gamefull: function(){
                 
                   product = number1 * number2;
            
            question.innerHTML = number1+"x"+number2;
            
            while(i < box.length){
                  
                 box[i].innerHTML = Math.floor(1+Math.random()*100);
                
                  i++;
                  }
            
           answer = Math.floor(Math.random()*3);
            
            box[answer].innerHTML = product;
            
             while(g < box.length){
                   
                 box[g].onclick = function(){
                     
                      correct =   this.innerHTML;       
                     
                     if(correct.trim()==product){
                        correctanswer.style.display = "block";
                        setTimeout(function(){
                            
                        correctanswer.style.display = "none";    
                            
                        },1000)
                         
                         scoreno++;
                         
                         score.innerHTML = scoreno;
                         
                         obj.gamefull();
                         
                        }
                        else{
                            wronganswer.style.display = "block";
                        setTimeout(function(){
                            
                        wronganswer.style.display = "none";    
                            
                        },1000)
                            
                        }
                 } 
                     
                   g++;  
                   }
            
            
            
            
        
    //btn = document.getElementById('startreset').innerHTML;
  
    timeremain.style.visibility = "visible";
    
   startreset.innerHTML = "Reset Game";
    
        b = startreset.innerHTML;
        
    count = setInterval(function(){
        x--;        
        countdown.innerHTML = x;
        if(x<=0){
            
            clearInterval(count);
            
            gameover.style.display = "block";
            
            gameover.children[1].innerHTML = "Your Score is "+scoreno;
            
            
                
        }
       
    },1000);
                 
             }
         }  
        
        
        if(b.trim() === "Start Game"){
            
            obj.gamefull();
          
        }
        else if(b.trim() === "Reset Game"){
                
            location.reload();
            
                }
        
    
  
}





//if we are playing
  //reload page
//if we are not playing
   //set score to 0
//show countdown box
//reduce time by 1sec in loops
  //timeleft
    //yes->continue
     //no->game over
//change button to reset
 //generate new code Q&A

//if we click on answer box
  //if we are playing
     //correct?
       //yes
               //increase score
              //show correct box for 1sec
              //generate new Q&A
          //no
           //show try again box for 1sec

