//if click on start/reset

var playing = false;

var action;

var correctanswr;

var correctbox;

var wronganswr;

var timevalue;

var score;

var scorevalue = document.getElementById('scorevalue');

var timeremaining = document.getElementById('timeremaining');

var gameover = document.getElementById('gameover');

var count = document.getElementById('timevalue');


var startreset = document.getElementById('startreset');

startreset.onclick = function(){
    
//if we are playing
    
    if(playing == true){
       
        location.reload();
        
       }
       else{
           //if we are not playing
           
           playing = true;
           
           score = 0;
           
           timevalue = 60;
           
           //setting the innerHTML of time remaining to 30
           
                                //set score to 0
           
           scorevalue.innerHTML = score;
           
                     //change button to reset
           
           startreset.innerHTML = "Reset Game";
           
                         //show countdown box
           
            show("timeremaining");
           
             hide('gameover');
           
           //reduce time by 1sec in loops
           
           showCountdown();
           
           //generate new code Q&A
           
           generateQA();
           
       
       }
    
}

//if we click on answer box
var i=1;

for(i=1;i<5;i++){
document.getElementById('box-'+i).onclick = function(){
    
    //correct?
    
    
    if(playing==true){
      
        if(correctanswr==this.innerHTML){
           
            //if answer is correct
            
             //increase score
            score++;
            
            scorevalue.innerHTML = score;
            
            //show correct box for 1 sec            
            show('correct');
            hide('wrong');
            
            setTimeout(function(){
                hide('correct');
                
            },1000);
            
            generateQA();
           
           }
           else{
               
               //if answer is wrong
               
               //show wrong box for 1 sec
                show('wrong');
            hide('correct');
            
            setTimeout(function(){
                hide('wrong');
                
            },1000);
           
           
           }
      
        
       }
   
}
}




  //if we are playing
     //correct?
       //yes
               //increase score
              //show correct box for 1sec
              //generate new Q&A
          //no
           //show try again box for 1sec

   //-----All Functions----

  //show the countdown

   function showCountdown(){
       
  action = setInterval(function(){
      
       count.innerHTML = timevalue;
                  
      if(timevalue==0){
         
          stopcountdown();
          
         }
      
       timevalue -= 1;
      
  },1000);
       
   }

//stop the countdown

function stopcountdown(){
    
    clearInterval(action);
    
      show("gameover");
    
    gameover.innerHTML = "<p>Game Over!</p><p>Your Score is "+score+"</p>";
    
    startreset.innerHTML = "Start Game";
    
       hide('correct');
    
        hide('wrong');
    
        playing = false;
     
      hide("timeremaining");
    
      
    
}

//show elements

function show(id){
    
    document.getElementById(id).style.display = "block";
    
}

//hide elements

function hide(id){
    
    document.getElementById(id).style.display = "none";
    
}

//generate questons for multiplication of a number

function generateQA(){
    
    var n1 = 1+Math.round(9*Math.random());
    
    var n2 = 1+Math.round(9*Math.random());
    
    document.getElementById('question').innerHTML = n1+"x"+n2;
    
    correctanswr = n1 * n2;
    
    correctbox = 1+Math.round(Math.random()*3)
    
    document.getElementById('box-'+correctbox).innerHTML=correctanswr;
    
    //fill out other boxes except correct one
    
        var arr = [correctanswr];
    
      for(i=1;i<5;i++){
          
          if(i!=correctbox)
              {
                  
                 do{
                     
                      wronganswr = (1+Math.round(9*Math.random()))*(1+Math.round(9*Math.random()));
                     
                 }while(arr.indexOf(wronganswr)>-1);
                  
                  document.getElementById('box-'+i).innerHTML = wronganswr;
                  
              }
          
      }
    
    
}