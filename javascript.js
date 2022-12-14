const options = ['rock', 'paper', 'scissors'];
let pcScore = 0;
let youScore = 0;
let tie = 0;

function getComputerChoice() {
    let rand = Math.floor(Math.random() * options.length);
    let pcChoice = options[rand];
    return pcChoice;

}

function yourChoice() {
    let choice = prompt('type rock, paper or scissors');
    while(choice == null || !(choice == 'paper' || choice == 'rock' || choice == 
'scissors')) {
        choice = prompt('type rock, paper or scissors');
        choice = choice.toLowerCase();
    }
    return choice; 
}

    
function playRound() {
    let playerSelection = yourChoice();
    let computerSelection = getComputerChoice();
    console.log(`Player: ${playerSelection}`);
    console.log(`Computer: ${computerSelection}`);
    if(playerSelection === computerSelection) {
        tie += 1;
        return 'Tie';
    } else if(playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'scissors' && computerSelection == 'paper') {
        youScore += 1;
        return 'You win!';
    } else {
        pcScore += 1;
        return 'Computer wins';     
    }
    }


function logScore(pcScore, tie, youScore) {
    console.log(`Pc: ${pcScore}, tie: ${tie}, You: ${youScore}`)
    } 

function winner(pcScore, tie, youScore) {
    if(pcScore > tie && pcScore > youScore) {
        console.log('You lost :( ');
    }else if(youScore > tie && youScore > pcScore) {
        console.log('Congrats, you are the winner :D ');
    }else {
        console.log('Tie, no winners');
    }
}

function refresh() {
    setTimeout("location.reload(true);", 500);
}


function gameOn() {
    for(let i = 1; i < 6; i++) {
     console.log(`Round ${i}:` + " " + playRound(i));
     logScore(pcScore, tie, youScore);
     console.log('----------------');   

    };
    return winner(pcScore, tie, youScore);
}



 function playAgain() {
    let play = prompt('Play Again? yes or no');
    while(play == null || !(play == 'yes' || play == 'no')) {
        play = prompt('Play Again? yes or no'); 
        play = play.toLowerCase();
    }
    window.location.reload();
}

    

    