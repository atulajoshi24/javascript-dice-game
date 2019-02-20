var player1score,player2score= 0;
var activePlayer = '1';

var init = function(){
       
    player1score = 0 ; 
    player2score = 0;
    activePlayer = '1';
    newscore = score();
  

    
}

var score = function(){
        
        var currentScore = 0;
        
        return function(value){
            
            //console.log('current turn score  ',value);
            
            if(value !== 0){
                currentScore = currentScore + value; 
                //console.log('total score  ',currentScore);                
                return currentScore;
                
            }else{               
                return currentScore;
            }
            
        }       
        
}


var rolldice = function(){
    
    var randomNumber = Math.floor((Math.random() * 7) + 0);
    var currentscore = newscore(randomNumber);
    console.log("randomNumber",randomNumber);
    
    
    if(activePlayer === '1'){      
        document.querySelector("#player1_currentscore").innerHTML = randomNumber;       
    }else if(activePlayer === '2'){             
        document.querySelector("#player2_currentscore").innerHTML = randomNumber;          
    }   
   
    resetandswitchplayerscore(randomNumber);
  
    checkwhowins(currentscore);    
    
    //setTimeout( () => checkwhowins(currentscore) , 1000);
    
}


function checkwhowins(currentscore){
    
    var totalscore = 0; 
    
    if(activePlayer === '1'){       
        totalscore = currentscore + player1score;     
        
    }else if(activePlayer === '2'){
        totalscore = currentscore + player2score;      
    }
       
    var stagescoreval = '#player'+activePlayer+'_stagescore';

     if(totalscore >= 15 ){  
         
        console.log('inside if condition totalscore >= 15 ',stagescoreval);
        document.querySelector(stagescoreval).innerHTML = totalscore;
       
        var text = 'Congratulations Player '+activePlayer+'  !!!! ,  You are a winner';
        
        document.querySelector("#game-results").innerHTML = text;
        document.querySelector("#game-results").style.display = 'block';
        //resetscores(); 
     }
    
}

var resetandswitchplayerscore = function(randomNumber){

     //console.log('Inside resetscoretozero ');
     if(randomNumber === 0){
         
         if(activePlayer === '1'){        
            player1score = 0;
            activePlayer = '2';
            document.querySelector("#player1_stagescore").innerHTML = 0;
            document.querySelector("#player1_currentscore").innerHTML = 0;
            newscore = score();


        }else if(activePlayer === '2'){

            player2score = 0;
            activePlayer = '1';
            document.querySelector("#player2_stagescore").innerHTML = 0;
            document.querySelector("#player2_currentscore").innerHTML = 0;      
            newscore = score();

        }
    }
    
    
}


var hold = function(){
   
    
    //console.log('inside hold function , active player is ',activePlayer);
    
    if(activePlayer === '1'){
        
        //console.log('player1score IS  ',player1score);
        
        player1score = player1score + newscore(0);
        activePlayer = '2';
        document.querySelector("#player1_stagescore").innerHTML = player1score;
        document.querySelector("#player1_currentscore").innerHTML = 0;
        //update dom here 
        newscore = score();
        //console.log('switching to active player 2',currentActivePlayer());
        
       
       
    }else if(activePlayer === '2'){
       
        //console.log('player2score IS  ',player2score);
        player2score = player2score + newscore(0);
        activePlayer = '1';
        document.querySelector("#player2_stagescore").innerHTML = player2score;
        document.querySelector("#player2_currentscore").innerHTML = 0;
        //update dom here 
        newscore = score();
        //console.log('switching to active player 1',currentActivePlayer());
    }
      
    
}

init();
var newscore = score();

var resetscores = function(){
    
     init();
     document.querySelector("#player2_stagescore").innerHTML = 0;
     document.querySelector("#player2_currentscore").innerHTML = 0;
    
     document.querySelector("#player1_stagescore").innerHTML = 0;
     document.querySelector("#player1_currentscore").innerHTML = 0;
     document.querySelector("#game-results").style.display = 'none';
    
     
     
}
