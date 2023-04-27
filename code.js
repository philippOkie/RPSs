let choices = ["rock", "paper", "scissors"];
const results = {
    counterPlayer: 0,
    counterComp: 0
}

let playerSelection;

function getComputerChoice(compSelection){
    return compSelection = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
}

function checkResult(){
    if (document.getElementById("resultMessage").innerHTML != "RESULT"){
        document.getElementById("resultMessage").innerHTML = "RESULT";
    }
}

// getting player choice by html buttons
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    playerSelection = 0;
    // changing choices imgs of player
    document.getElementById("playerChoice").src="img/rocks.png";
    playRound();
})
paper.addEventListener('click', () => {
    playerSelection = 1;
    document.getElementById("playerChoice").src="img/toilet-paper.png";
    playRound();
})
scissors.addEventListener('click', () => {
    playerSelection = 2;
    document.getElementById("playerChoice").src="img/scissors.png";
    playRound();
})

function playRound(){
    let compSelection = getComputerChoice();
    // changing choices imgs of computer
    if (compSelection == 0){
        document.getElementById("compChoice").src="img/rocks.png";
    }
    else if (compSelection == 1){
        document.getElementById("compChoice").src="img/toilet-paper.png";
    }
    else{
        document.getElementById("compChoice").src="img/scissors.png";
    }

    if (choices[compSelection] == choices[0] 
    && choices[playerSelection] == choices[2]){
        results.counterComp++;
        document.getElementById("resultMessage").innerHTML = "LOSE";
    }

    else if (choices[compSelection] == choices[1] 
        && choices[playerSelection] == choices[0]){       
        results.counterComp++;
        document.getElementById("resultMessage").innerHTML = "LOSE";
    }

    else if (choices[compSelection] == choices[2] 
        && choices[playerSelection] == choices[1]){
        results.counterComp++;
        document.getElementById("resultMessage").innerHTML = "LOSE";
    }

    else if (choices[compSelection] == choices[0] 
        && choices[playerSelection] == choices[1]){
        results.counterPlayer++;
        document.getElementById("resultMessage").innerHTML = "WIN";
    }

    else if (choices[compSelection] == choices[1] 
        && choices[playerSelection] == choices[2]){       
        results.counterPlayer++;
        document.getElementById("resultMessage").innerHTML = "WIN";
    }

    else if (choices[compSelection] == choices[2] 
        && choices[playerSelection] == choices[0]){
        results.counterPlayer++;
        document.getElementById("resultMessage").innerHTML = "WIN";
    }

    else if(choices[compSelection] == choices[0] 
        && choices[playerSelection] == choices[0]){
        document.getElementById("resultMessage").innerHTML = "TIE";
    }

    else if(choices[compSelection] == choices[1] 
        && choices[playerSelection] == choices[1]){
        document.getElementById("resultMessage").innerHTML = "TIE";
    }

    else if(choices[compSelection] == choices[2] 
        && choices[playerSelection] == choices[2]){
        
        document.getElementById("resultMessage").innerHTML = "TIE";
    }
    // showing the points of the player and the computer 
    document.getElementById("playerResult").innerHTML = results.counterPlayer;
    document.getElementById("computerResult").innerHTML = results.counterComp;

    console.log("Player:", choices[playerSelection])
    console.log("computer:", choices[compSelection])

    game();    
}

// we can play till we don't have a winner with 5 points
function game(){
    if (results.counterPlayer == 5){
        document.getElementById("resultMessage").innerHTML = "PLAYER WINS";
        // to make counters equal to zero again after we had the winner
        return results.counterComp = 0, results.counterPlayer = 0;
    }

    else if (results.counterComp == 5){
        document.getElementById("resultMessage").innerHTML = "COMPUTER WINS";
        return results.counterComp = 0, results.counterPlayer = 0;
    } 
}






