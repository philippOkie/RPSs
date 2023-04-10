let choices = ["rock", "paper", "scissors"];
const results = {
    counterPlayer: 0,
    counterComp: 0
}


function getComputerChoice(compSelection){

    return compSelection = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

}


function playRound(){

    const playerSelection = parseInt(prompt()); 
    const compSelection = getComputerChoice();    

    if (choices[compSelection] == choices[0] 
    && choices[playerSelection] == choices[2]){
    
        results.counterComp++;
        console.log("LOSE");
    }

    else if (choices[compSelection] == choices[1] 
        && choices[playerSelection] == choices[0]){       
        
        results.counterComp++;
        console.log("LOSE");
    }

    else if (choices[compSelection] == choices[2] 
        && choices[playerSelection] == choices[1]){
        
        results.counterComp++;
        console.log("LOSE");
    }


    else if (choices[compSelection] == choices[0] 
        && choices[playerSelection] == choices[1]){
        
        results.counterPlayer++;
        console.log("WIN");
    }

    else if (choices[compSelection] == choices[1] 
        && choices[playerSelection] == choices[2]){       
        
        results.counterPlayer++;
        console.log("WIN");
    }

    else if (choices[compSelection] == choices[2] 
        && choices[playerSelection] == choices[0]){
        
        results.counterPlayer++;
        console.log("WIN");
    }


    else{
        console.log("TIE");
    }    
    
    console.log("computer ", choices[compSelection]);
    console.log("player ", choices[playerSelection]);    
}


function game(){
    for (let step = 0; step < 6; step ++){
        playRound()
    }
    if (results.counterPlayer > results.counterComp){
        console.log("u r the winner");
    }

    else{
        console.log("u r the loser");
    }
    console.log('player', results.counterPlayer);
    console.log('comp', results.counterComp);
}


console.log(choices);

game();

